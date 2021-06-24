import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';


import { View, Text } from 'react-native';

import { styles } from './styles'
import { theme } from '../../globals/styles/theme';


type Props = {
  title: string;
  action?: ReactNode;
}


export function Header({ title, action }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  const { secondary100, secondary40, heading } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[ secondary100, secondary40 ]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather 
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        action &&
        <View>
          {action}
        </View>
      }

    </LinearGradient>
  )
}