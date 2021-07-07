import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../globals/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
  noMatches: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noMatchesTitle: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  }
})