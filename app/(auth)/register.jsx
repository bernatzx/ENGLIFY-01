import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { colors, fonts } from '../../styles/global'

const Register = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <View style={styles.container}>

      <View>
        <Text style={{ fontSize: 62, color: colors.PRIMARY, fontFamily: fonts.PRIMARY, textAlign: 'center' }}>
          Create Account
        </Text>
        <Text style={{ textAlign: 'center', color: colors.PRIMARY, fontFamily: fonts.BOLD, fontSize: 18 }}>
          Start your English learning journey
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Feather color={colors.PRIMARY} name="user" size={20} />
          <TextInput
            style={styles.text_field}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.input}>
          <Feather color={colors.PRIMARY} name="mail" size={20} />
          <TextInput
            style={styles.text_field}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.input}>
          <Feather color={colors.PRIMARY} name="lock" size={20} />
          <TextInput
            style={styles.text_field}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather color={colors.PRIMARY} name={showPassword ? 'eye' : 'eye-off'} size={20} />
          </Pressable>
        </View>

        <View style={styles.input}>
          <Feather color={colors.PRIMARY} name="lock" size={20} />
          <TextInput
            style={styles.text_field}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Feather color={colors.PRIMARY} name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} />
          </Pressable>
        </View>
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.register_btn}>
          <Text style={{ fontSize: 24, color: colors.WHITE, fontFamily: fonts.PRIMARY }}>
            Sign Up
          </Text>
          <Feather color={colors.WHITE} name="arrow-right" size={20} />
        </Pressable>
        <View style={styles.signin}>
          <Text style={{ color: colors.PRIMARY, fontFamily: fonts.SECONDARY, fontSize: 16 }}>Already have an account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={{ color: colors.PRIMARY, fontFamily: fonts.BOLD, fontSize: 16 }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BG
  },
  form: {
    width: '100%',
    paddingTop: 35,
    flexDirection: 'column',
    gap: 14
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.WHITE,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 8,
    gap: 14
  },
  text_field: {
    fontSize: 18,
    flex: 1,
    color: colors.PRIMARY,
    fontFamily: fonts.PRIMARY
  },
  bottom: {
    width: '100%',
    paddingTop: 35,
    flexDirection: 'column',
    gap: 14
  },
  register_btn: {
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 50
  },
  signin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})