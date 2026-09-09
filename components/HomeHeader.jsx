import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, globalStyles } from '../styles/global';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

const HomeHeader = () => {
  const { user } = useAuth()
  const router = useRouter();
  const hour = new Date().getHours()

  const greeting =
    hour < 12 ? 'Good Morning,' :
      hour < 18 ? 'Good Afternoon,' :
        'Good Evening,'

  const firstName = user?.name?.split(' ')[0] || ''
  const initial = firstName.charAt(0).toUpperCase()
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
          <Text style={styles.greet}>{greeting}</Text>
        </View>
        <Pressable
          style={[styles.initial, globalStyles.shadow]}
          onPress={() => router.navigate('profile')}
        >
          <Text style={{ fontSize: 16, fontFamily: fonts.BOLD, color: colors.PRIMARY_LIGTH }}>{initial}</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.greet}>{firstName}</Text>
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
    backgroundColor: colors.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#e8dece',
    borderWidth: 1,
  }
})