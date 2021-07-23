import React, { useState, useEffect } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import * as Linking from 'expo-linking'

import { 
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform
} from 'react-native'

import { styles } from './styles'
import { Header } from '../../components/Header'
import { Member, MemberProps } from '../../components/Member'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ButtonIcon } from '../../components/ButtonIcon'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'

import { theme } from '../../globals/styles/theme'
import bannerImg from '../../assets/banner.png'
import { useRoute } from '@react-navigation/native'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'

type Params = {
  guildSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)

  const route = useRoute()
  const { guildSelected } = route.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
    } catch {
      Alert.alert('Verifique as configurações de widget do servidor.')
    } finally {
      setLoading(false)
    }
  }

  function handleShareInvitation() {
    const url = widget.instant_invite
    const message = Platform.OS === 'ios' ? `Junte-se a ${guildSelected.guild.name}` : url
      
    Share.share({
      message,
      url,
    })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget()
  },[])

  return (
    <Background>
      <Header 
        title='Detalhes'
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={ handleShareInvitation }>
            <Fontisto
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={bannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            {guildSelected.guild.name}
          </Text>

          <Text style={styles.subTitle}>
          {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>

      {
        loading ? <Load /> :
        <>
          {
              guildSelected.guild.owner &&
              <>
              <ListHeader 
                title='Jogadores'
                subtitle={`Total: ${widget.members.length}`}
              />

              <FlatList 
                data={widget.members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
              />
            </>
          }
        </>
      }

      {
        guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            title='Entrar na partida'
            onPress={handleOpenGuild}
          />
        </View>
      }

    </Background>
  )
}