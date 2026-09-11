import { StyleSheet } from "react-native";

export const colors = {
  BG: '#f9e1c9',
  PRIMARY: '#657166',
  PRIMARY_LIGTH: '#6e8b82',
  SECONDARY: '#cfd6c4',
  SECONDARY_LIGHT: '#dce0d6',
  WHITE: '#f8ede3',
  RED: '#f08080',
  LIGHT_RED: '#f1c4c4',
  BLUE: '#acd5dd',
  DARK_BLUE: '#71b9c7'
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
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
  }
})