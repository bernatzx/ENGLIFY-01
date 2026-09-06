import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    // Dummy login
    if (email === 'tes' && password === '123') {
      setUser({
        id: 1,
        name: 'Test User',
        email: email,
      })

      return {
        success: true,
      }
    }

    return {
      success: false,
      message: 'Email atau password salah',
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
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