import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global';
import { useRouter } from 'expo-router';
import { fontStyles } from '../styles/fonts';

const HomeHeader = () => {
  const router = useRouter();
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.head}>
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text style={[
            fontStyles.subtitle_bold,
            fontStyles.secondary_color
          ]}>{currentDate}</Text>
          <Text style={[
            styles.greet,
            fontStyles.title,
            fontStyles.primary_color
          ]}>Good Morning,</Text>
        </View>
        <Pressable
          style={[styles.initial, globalStyles.shadow]}
          onPress={() => router.navigate('profile')}
        >
          <Text style={[
            fontStyles.subtitle_bold,
            fontStyles.secondary_color,
            { fontSize: 16 }
          ]}>I</Text>
        </Pressable>
      </View>
      <View>
        <Text style={[
          styles.greet,
          fontStyles.title,
          fontStyles.primary_color
        ]}>Indri</Text>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  greet: {
    fontSize: 48
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