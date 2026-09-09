// TODO: Add backend rate limiting for OTP resend and verification.
// Frontend countdown only prevents repeated requests from the UI;
// production must enforce the limit on the server to prevent abuse.
// Example: max 1 resend per 60 seconds per email/IP.

import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { verifyEmail, resendVerification } from '../../services/auth'
import { colors, fonts } from '../../styles/global'

const VerifyEmail = () => {
  const router = useRouter()
  const { email } = useLocalSearchParams()

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [resendLoading, setResendLoading] = useState(false)
  const [countdown, setCountdown] = useState(60)

  useEffect(() => {
    if (countdown <= 0) return

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  const handleVerify = async () => {
    setError('')

    if (otp.length !== 6) {
      setError('please enter the 6-digit code')
      return
    }

    setLoading(true)

    try {
      const result = await verifyEmail(email, otp)

      if (!result.success) {
        setError(result.message)
        return
      }

      router.replace('/login')
    } catch (error) {
      setError('something went wrong. please try again')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (countdown > 0 || resendLoading) return

    setError('')
    setResendLoading(true)

    try {
      const result = await resendVerification(email)

      if (!result.success) {
        setError(result.message)
        return
      }

      setCountdown(60)
    } catch (error) {
      setError('something went wrong. please try again')
    } finally {
      setResendLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email</Text>

      <Text style={styles.subtitle}>
        Enter the 6-digit code sent to your email
      </Text>

      <TextInput
        style={styles.input}
        placeholder="000000"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
      />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}

      <Pressable
        style={styles.button}
        onPress={handleVerify}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Verifying...' : 'Verify Email'}
        </Text>
      </Pressable>

      <Pressable
        onPress={handleResend}
        disabled={countdown > 0 || resendLoading}
      >
        <Text style={styles.resend}>
          {resendLoading
            ? 'Sending...'
            : countdown > 0
              ? `Resend code in ${countdown}s`
              : 'Resend code'}
        </Text>
      </Pressable>
    </View>
  )
}

export default VerifyEmail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BG
  },
  title: {
    fontSize: 50,
    color: colors.PRIMARY,
    fontFamily: fonts.PRIMARY
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: colors.PRIMARY,
    fontFamily: fonts.SECONDARY,
    textAlign: 'center'
  },
  resend: {
    marginTop: 18,
    color: colors.PRIMARY,
    fontFamily: fonts.BOLD,
    fontSize: 16,
  },
  input: {
    width: '100%',
    marginTop: 30,
    padding: 15,
    borderRadius: 50,
    backgroundColor: colors.WHITE,
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 8,
    color: colors.PRIMARY,
    fontFamily: fonts.PRIMARY
  },
  error: {
    marginTop: 14,
    color: '#f08080',
    fontFamily: fonts.BOLD
  },
  button: {
    width: '100%',
    marginTop: 25,
    padding: 15,
    borderRadius: 50,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center'
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 22,
    fontFamily: fonts.PRIMARY
  }
})