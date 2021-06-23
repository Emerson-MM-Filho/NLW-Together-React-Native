import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles'

export function GuildIcon() {
  const uri = 'https://github.com/emerson-mm-filho.png'

  return (
    <Image 
      source={{ uri }}
      style={styles.image }
      resizeMode='cover'
    />
  )
}