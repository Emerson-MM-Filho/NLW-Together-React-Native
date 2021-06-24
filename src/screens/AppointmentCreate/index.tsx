import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import {
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'

import { Guilds } from '../Guilds'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { GuildProps } from '../../components/Guild'
import { TextArea } from '../../components/TextArea'
import { GuildIcon } from '../../components/GuildIcon'
import { ModalView } from '../../components/ModalView'
import { Background } from '../../components/Background'
import { SmallInput } from '../../components/SmallInput'
import { CategorySelect } from '../../components/CategorySelect'

import { styles } from './styles'
import { theme } from '../../globals/styles/theme'

export function AppointmentCreate() {
  const [ category, setCategory ] = useState('')
  const [ openGuildsModal, setOpenGuildsModal ] = useState(false)
  const [ guild, setGuild ] = useState<GuildProps>({} as GuildProps)

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleGuildSelect( guildSelected: GuildProps) {
    setGuild(guildSelected)
    setOpenGuildsModal(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header 
            title='Agendar partida'
          />
          <Text style={[styles.label, 
            {  
              marginLeft: 24,
              marginTop: 36,
              marginBottom: 18,
            }]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                  ? <GuildIcon />
                  : <View style={styles.image}/> 
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {
                      guild.name 
                      ? guild.name 
                      : 'Selecione um servidor'
                    }
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>
          
            <View style={styles.field}>
              <View>
                <Text style={styles.label}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              
              <View>
              
                <Text style={styles.label}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            
            </View>
            
            <View style={[styles.field, { marginBottom: 12, }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Máx 100 caracteres
              </Text>

            </View>

            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button 
                title='Agendar' />
            </View>

          </View>
        </Background>         
      </ScrollView>

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}