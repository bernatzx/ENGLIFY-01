import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext'

const Profile = () => {
  const { user, logout } = useAuth()


  return (
    <View>
      <Text>Profile</Text>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Pressable onPress={logout}>
        <Text>Keluar</Text>
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})