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

      {/* Header */}
      <View>
        <Text style={[
          fontStyles.title,
          fontStyles.primary_color,
          {
            fontSize: 56
          }
        ]}>
          Create Account
        </Text>

        <Text style={[
          fontStyles.subtitle_bold,
          fontStyles.secondary_color,
          { textAlign: 'center' }
        ]}>
          Start your English learning journey
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>

        {/* Name */}
        <View style={styles.input}>
          <Feather
            style={fontStyles.secondary_color}
            name="user"
            size={32}
          />

          <TextInput
            style={[
              fontStyles.title,
              fontStyles.secondary_color,
              {
                fontSize: 18,
                flex: 1
              }
            ]}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        {/* Email */}
        <View style={styles.input}>
          <Feather
            style={fontStyles.secondary_color}
            name="mail"
            size={32}
          />

          <TextInput
            style={[
              fontStyles.title,
              fontStyles.secondary_color,
              {
                fontSize: 18,
                flex: 1
              }
            ]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.input}>
          <Feather
            style={fontStyles.secondary_color}
            name="lock"
            size={32}
          />

          <TextInput
            style={[
              fontStyles.title,
              fontStyles.secondary_color,
              {
                fontSize: 18,
                flex: 1
              }
            ]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <Pressable
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              style={fontStyles.secondary_color}
              name={showPassword ? 'eye' : 'eye-off'}
              size={32}
            />
          </Pressable>
        </View>

        {/* Confirm Password */}
        <View style={styles.input}>
          <Feather
            style={fontStyles.secondary_color}
            name="lock"
            size={32}
          />

          <TextInput
            style={[
              fontStyles.title,
              fontStyles.secondary_color,
              {
                fontSize: 18,
                flex: 1
              }
            ]}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />

          <Pressable
            onPress={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            <Feather
              style={fontStyles.secondary_color}
              name={showConfirmPassword ? 'eye' : 'eye-off'}
              size={32}
            />
          </Pressable>
        </View>

      </View>

      {/* Register Button */}
      <View style={styles.bottom}>

        <Pressable style={styles.register_btn}>
          <Text style={[
            fontStyles.title,
            {
              fontSize: 24,
              color: '#fff'
            }
          ]}>
            Sign Up
          </Text>

          <Feather
            color="#fff"
            name="arrow-right"
            size={32}
          />
        </Pressable>

        {/* Login */}
        <View style={styles.login}>
          <Text style={[
            fontStyles.subtitle,
            fontStyles.secondary_color
          ]}>
            Already have an account?
          </Text>

          <Pressable onPress={() => router.push("/login")}>
            <Text style={[
              fontStyles.subtitle_bold,
              fontStyles.secondary_color
            ]}>
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
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#999',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 8,
    gap: 25
  },

  bottom: {
    width: '100%',
    paddingTop: 35,
    flexDirection: 'column',
    gap: 14
  },

  register_btn: {
    backgroundColor: '#6e8b82',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 50
  },

  login: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})