import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native'
import { useAuth } from '../../context/AuthContext'
import { Feather } from '@expo/vector-icons'
import { fontStyles } from '../../styles/fonts'
import { useRouter } from 'expo-router'
import { colors } from '../../styles/global'

const Login = () => {
  const { login } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    setError('')
    const result = await login(email, password)
    if (!result.success) {
      setError(result.message)
    }
  }

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
          Welcome!
        </Text>
        <Text style={[
          fontStyles.subtitle_bold,
          { color: colors.primary }
        ]}>
          Keep learning, keep growing
        </Text>
      </View>

      <View style={{ width: '100%', paddingTop: 35, flexDirection: 'column', gap: 14 }}>
        <View style={styles.input}>
          <Feather color={colors.primary} name="mail" size={32} />
          <TextInput
            style={[fontStyles.title, { fontSize: 18, flex: 1, color: colors.primary }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.input}>
          <Feather color={colors.primary} name="lock" size={32} />
          <TextInput
            style={[fontStyles.title, { fontSize: 18, flex: 1, color: colors.primary }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather color={colors.primary} name={showPassword ? 'eye' : 'eye-off'} size={32} />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={[fontStyles.title, { fontSize: 18, color: colors.primary }]}>Forgot Password?</Text>
        </View>
      </View>

      {error ? (
        <Text style={[fontStyles.subtitle_bold, { color: colors.primary }]}>
          {error}
        </Text>
      ) : null}

      <View style={{ width: '100%', paddingTop: 35, flexDirection: 'column', gap: 14 }}>
        <Pressable onPress={handleLogin} style={styles.login_btn}>
          <Text style={[fontStyles.title, { fontSize: 24, color: colors.secondary }]}>
            Login
          </Text>
          <Feather color={colors.secondary} name="arrow-right" size={32} />
        </Pressable>
        <View style={styles.signup}>
          <Text style={[fontStyles.subtitle, { color: colors.primary }]}>Don't have an account? </Text>
          <Pressable onPress={() => router.push('/register')}>
            <Text style={[fontStyles.subtitle_bold, { color: colors.primary }]}>Sign Up</Text>
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
    backgroundColor: colors.bgcolor
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 8,
    gap: 25
  },
  login_btn: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 50
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})