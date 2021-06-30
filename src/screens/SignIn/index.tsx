import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';


import { style } from './styles';
import { theme } from '../../globals/styles/theme';
import IllustrationImg from '../../assets/illustration.png';


export function SignIn(){
  const { loading, signIn } = useAuth()

  
  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return(
    <ScrollView>
      <Background>
        <View style={style.container}>
          
          <Image source={IllustrationImg} style={style.image} resizeMode='stretch' />

          <View style={style.content}>
            <Text style={style.title}>
              Conecte-se {'\n'}
              e organize suas {'\n'}
              jogatinas
            </Text>

            <Text style={style.subTitle}>
              Crie grupos para jogar seus games {'\n'}
              favoritos com seus amigos
            </Text>

            {
              loading ? <ActivityIndicator color={theme.colors.primary} />
              :
              <ButtonIcon 
                title='Entrar com Discord'
                onPress={handleSignIn}
              />
            }
          </View>
        </View>
      </Background>
    </ScrollView>
  );
}