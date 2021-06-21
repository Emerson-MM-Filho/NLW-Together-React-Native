import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'
import { style } from './styles'

export function Signin(){
  return(
    <View style={style.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent' 
        translucent  
      />
      <Image source={IllustrationImg} style={style.image} resizeMode='stretch' />

      <View style={style.content}>
        <Text style={style.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={style.subTitle}>
          Crie grupos par ajofar seus gamer {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title='Entrar com Discord'
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}