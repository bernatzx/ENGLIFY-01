import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { useAuth } from '../../context/AuthContext'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { colors, fonts } from '../../styles/global'

const Login = () => {
  const { login } = useAuth()
  const router = useRouter()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setError('')
    const cleanEmail = email.trim().toLowerCase()
    if (!cleanEmail) {
      setError('please enter your email')
      return
    }
    if (!emailRegex.test(cleanEmail)) {
      setError("please enter a valid email address")
      return
    }
    if (!password) {
      setError('please enter your password')
      return
    }
    setLoading(true)
    try {
      const result = await login(cleanEmail, password)
      if (!result.success) {
        setError(result.message)
        return
      }
    } catch (error) {
      setError('something went wrong. please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={{ fontSize: 62, color: colors.PRIMARY, fontFamily: fonts.PRIMARY, textAlign: 'center' }}>
          Welcome!
        </Text>
        <Text style={{ color: colors.PRIMARY, fontFamily: fonts.BOLD, textAlign: 'center', fontSize: 18 }}>
          Keep learning, keep growing
        </Text>
      </View>

      <View style={{ width: '100%', paddingTop: 35, flexDirection: 'column', gap: 14 }}>
        <View style={styles.input}>
          <Feather color={colors.PRIMARY} name="mail" size={20} />
          <TextInput
            style={{ fontSize: 18, flex: 1, color: colors.PRIMARY, fontFamily: fonts.PRIMARY }}
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
            style={{ fontSize: 18, flex: 1, color: colors.PRIMARY, fontFamily: fonts.PRIMARY }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather color={colors.PRIMARY} name={showPassword ? 'eye' : 'eye-off'} size={20} />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 14 }}>
          <Text style={{ fontSize: 16, color: colors.PRIMARY, fontFamily: fonts.PRIMARY }}>Forgot Password?</Text>
        </View>
      </View>

      {error ? (
        <Text style={styles.errorMsg}>
          {error}
        </Text>
      ) : null}

      <View style={{ width: '100%', flexDirection: 'column', gap: 14 }}>
        <Pressable onPress={handleLogin} disabled={loading} style={styles.login_btn}>
          {loading ? (<ActivityIndicator size='small' color={colors.WHITE} />) : (
            <>
              <Text style={{ fontSize: 24, color: colors.WHITE, fontFamily: fonts.PRIMARY }}>
                Login
              </Text>
              <Feather color={colors.WHITE} name="arrow-right" size={20} />
            </>
          )}
        </Pressable>
        <View style={styles.signup}>
          <Text style={{ color: colors.PRIMARY, fontFamily: fonts.SECONDARY, fontSize: 16 }}>Don't have an account? </Text>
          <Pressable onPress={() => router.push('/register')}>
            <Text style={{ color: colors.PRIMARY, fontFamily: fonts.BOLD, fontSize: 16 }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BG
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
  errorMsg: {
    color: colors.WHITE,
    width: '100%',
    borderRadius: 14,
    textTransform: 'capitalize',
    fontFamily: fonts.BOLD,
    backgroundColor: '#f08080',
    marginBottom: 14,
    padding: 8
  },
  login_btn: {
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 50
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})