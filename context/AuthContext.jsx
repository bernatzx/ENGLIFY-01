import React, { createContext, useContext, useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { login as loginService, getMe } from '../services/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const savedToken = await SecureStore.getItemAsync('access_token')
      if (!savedToken) {
        setLoading(false)
        return
      }
      setToken(savedToken)
      const result = await getMe(savedToken)

      if (result.success) {
        setUser(result.user)
      } else {
        await SecureStore.deleteItemAsync('access_token')

        setToken(null)
        setUser(null)
      }
    } catch (error) {
      console.error('Check auth error:', error)

      setToken(null)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    const result = await loginService(email, password)

    if (result.success) {
      await SecureStore.setItemAsync(
        'access_token',
        result.access_token
      )
      setUser(result.user)
      setToken(result.access_token)
    }

    return result
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync('access_token')
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}