import { StyleSheet } from "react-native";
import { theme } from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width:62,
    height: 62,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})