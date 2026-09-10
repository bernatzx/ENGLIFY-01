import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
import { colors, fonts, globalStyles } from '../../styles/global'

const Profile = () => {
  const { user, logout } = useAuth()


  return (
    <>
      <View style={styles.container}>
        {/* HEAD */}
        <View style={styles.head}>
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY,
            fontSize: 52
          }}>My Profile</Text>
          <Text style={{
            fontFamily: fonts.SECONDARY,
            color: colors.PRIMARY_LIGTH,
            fontSize: 24
          }}>Better version of you</Text>
        </View>

        {/* BODY */}
        <View style={[globalStyles.shadow, styles.firstBody]}>
          <Feather style={styles.userImg} name='user' size={62} />
          <View>
            <Text style={{
              fontFamily: fonts.PRIMARY,
              color: colors.PRIMARY,
              fontSize: 26
            }}>{user?.name}</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 7
            }}>
              <Feather color={colors.PRIMARY_LIGTH} name='mail' size={16} />
              <Text style={{
                fontFamily: fonts.SECONDARY,
                color: colors.PRIMARY_LIGTH,
                fontSize: 16
              }}>{user?.email}</Text>
            </View>
          </View>
        </View>

        <View style={[globalStyles.shadow, styles.secondBody]}>
          <View style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Feather color={colors.PRIMARY} name='book-open' size={28} />
            <Text style={{ fontFamily: fonts.PRIMARY, color: colors.PRIMARY, fontSize: 28 }}>11</Text>
            <Text style={{ fontFamily: fonts.PRIMARY, color: colors.PRIMARY, fontSize: 28 }}>Practice</Text>
          </View>
          <View style={styles.divider}></View>
          <View style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Feather color={colors.PRIMARY} name='target' size={28} />
            <Text style={{ fontFamily: fonts.PRIMARY, color: colors.PRIMARY, fontSize: 28 }}>11</Text>
            <Text style={{ fontFamily: fonts.PRIMARY, color: colors.PRIMARY, fontSize: 28 }}>Avg. Score</Text>
          </View>
        </View>

        {/* FOOT */}
        <Pressable style={styles.foot} onPress={logout}>
          <View style={{
            flexDirection: 'row',
            gap: 14,
            alignItems: 'center'
          }}>
            <MaterialIcons style={{
              backgroundColor: colors.RED,
              borderRadius: 20,
              padding: 4,
              color: colors.WHITE
            }} name='exit-to-app' size={20} />
            <Text style={{
              fontFamily: fonts.BOLD,
              color: colors.PRIMARY,
              fontSize: 18
            }}>Log Out</Text>
          </View>
          <AntDesign color={colors.PRIMARY} name='right' size={18} />
        </Pressable>
      </View >
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 14
  },
  firstBody: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14
  },
  userImg: {
    backgroundColor: colors.BG,
    padding: 8,
    borderRadius: 62,
    color: colors.PRIMARY
  },
  secondBody: {
    backgroundColor: colors.BLUE,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  foot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.LIGHT_RED,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14
  },
  divider: {
    width: 2,
    backgroundColor: colors.PRIMARY,
  },
})