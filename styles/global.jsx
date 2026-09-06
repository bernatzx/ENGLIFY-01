import { StyleSheet } from "react-native";

export const colors = {
  bgcolor: '#f9e1c9',
  primary: '#657166',
  secondary: '#cfd6c4',
  white: '#f8ede3'
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