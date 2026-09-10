import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const GrammarDetail = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>Grammar ID: {id}</Text>
    </View>
  )
}

export default GrammarDetail