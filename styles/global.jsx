import { StyleSheet } from "react-native";

export const colors = {
  BG: '#f9e1c9',
  PRIMARY: '#657166',
  PRIMARY_LIGTH: '#6e8b82',
  SECONDARY: '#cfd6c4',
  WHITE: '#f8ede3'
}

export const fonts = {
  PRIMARY: 'CaveatBrush',
  SECONDARY: 'Kalam-Regular',
  BOLD: 'Kalam-Bold'
}

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#888",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 3,
  }
})