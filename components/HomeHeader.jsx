import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, globalStyles } from '../styles/global';
import { useRouter } from 'expo-router';

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
          <Text style={{ color: colors.PRIMARY_LIGTH, fontFamily: fonts.BOLD }}>
            {currentDate}
          </Text>
          <Text style={styles.greet}>Good Morning,</Text>
        </View>
        <Pressable
          style={[styles.initial, globalStyles.shadow]}
          onPress={() => router.navigate('profile')}
        >
          <Text style={{ fontSize: 16, fontFamily: fonts.BOLD, color: colors.PRIMARY_LIGTH }}>I</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.greet}>Indri</Text>
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
    color: colors.PRIMARY,
    fontFamily: fonts.PRIMARY,
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