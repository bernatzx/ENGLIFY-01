import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { fontStyles } from '../../styles/fonts'
import { useRouter } from 'expo-router'
import { colors } from '../../styles/global'

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
        <Text style={[
          fontStyles.title,
          {
            fontSize: 56,
            color: colors.primary
          }
        ]}>
          Create Account
        </Text>
        <Text style={[
          fontStyles.subtitle_bold,
          { textAlign: 'center', color: colors.primary }
        ]}>
          Start your English learning journey
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Feather color={colors.primary} name="user" size={20} />
          <TextInput
            style={[fontStyles.title, styles.text_field]}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.input}>
          <Feather color={colors.primary} name="mail" size={20} />
          <TextInput
            style={[fontStyles.title, styles.text_field]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.input}>
          <Feather color={colors.primary} name="lock" size={20} />
          <TextInput
            style={[fontStyles.title, styles.text_field]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather color={colors.primary} name={showPassword ? 'eye' : 'eye-off'} size={20} />
          </Pressable>
        </View>

        <View style={styles.input}>
          <Feather color={colors.primary} name="lock" size={20} />
          <TextInput
            style={[fontStyles.title, styles.text_field]}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Feather color={colors.primary} name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} />
          </Pressable>
        </View>
      </View>

      <View style={styles.bottom}>
        <Pressable style={styles.register_btn}>
          <Text style={[fontStyles.title, { fontSize: 24, color: colors.white }]}>
            Sign Up
          </Text>
          <Feather color={colors.white} name="arrow-right" size={20} />
        </Pressable>
        <View style={styles.signin}>
          <Text style={[fontStyles.subtitle, { color: colors.primary }]}>Already have an account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={[fontStyles.subtitle_bold, { color: colors.primary }]}>
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
    backgroundColor: colors.bgcolor
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
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 8,
    gap: 14
  },
  text_field: {
    fontSize: 18,
    flex: 1,
    color: colors.primary
  },
  bottom: {
    width: '100%',
    paddingTop: 35,
    flexDirection: 'column',
    gap: 14
  },
  register_btn: {
    backgroundColor: colors.primary,
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
    justifyContent: 'center'
  }
})