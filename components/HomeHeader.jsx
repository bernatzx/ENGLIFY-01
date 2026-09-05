import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global';
import { useRouter } from 'expo-router';

const HomeHeader = () => {
  const router = useRouter();
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text style={styles.date}>{currentDate}</Text>
          <Text style={styles.greet}>Good Morning,</Text>
        </View>
        <Pressable
          style={[styles.initial, globalStyles.shadow]}
          onPress={() => router.navigate('profile')}
        >
          <Text style={{ color: '#315c50', fontWeight: '600', fontSize: 16 }}>I</Text>
        </Pressable>
      </View>
      <View>
        <Text style={[styles.greet, { marginTop: -8 }]}>Indri</Text>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  date: {
    color: '#315c50',
    fontWeight: '600'
  },
  greet: {
    color: '#315c50',
    fontSize: 32,
    fontWeight: 'bold'
  },
  initial: {
    backgroundColor: '#f3e9cd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#e8dece',
    borderWidth: 1,
  }
})