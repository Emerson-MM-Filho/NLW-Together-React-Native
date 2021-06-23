import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { style } from './styles';


export function SignIn(){
  const navigation = useNavigation();
  
  function handleSignIn() {
    navigation.navigate('Home');
  }

  return(
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

        <ButtonIcon 
          title='Entrar com Discord'
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
}