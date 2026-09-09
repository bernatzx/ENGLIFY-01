const API_URL = 'http://192.168.0.144:8000'

export const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: Array.isArray(data.detail)
          ? data.detail[0]?.msg?.split(':')[0] || 'Registration failed'
          : data.detail || 'Registration failed',
      }
    }

    return data
  } catch (error) {
    return {
      success: false,
      message: 'Cannot connect to server',
    }
  }
}

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: Array.isArray(data.detail)
          ? data.detail[0]?.msg?.split(':')[0] || 'Login failed'
          : data.detail || 'Login failed',
      }
    }

    return data
  } catch (error) {
    return {
      success: false,
      message: 'Cannot connect to server',
    }
  }
}

export const verifyEmail = async (email, otp) => {
  try {
    const response = await fetch(`${API_URL}/auth/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: Array.isArray(data.detail)
          ? data.detail[0]?.msg?.split(':')[0] || 'Verification failed'
          : data.detail || 'Verification failed',
      }
    }

    return data
  } catch (error) {
    return {
      success: false,
      message: 'Cannot connect to server',
    }
  }
}

export const resendVerification = async (email) => {
  try {
    const response = await fetch(`${API_URL}/auth/resend-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: Array.isArray(data.detail)
          ? data.detail[0]?.msg?.split(':')[0] || 'Failed to resend code'
          : data.detail || 'Failed to resend code',
      }
    }

    return data
  } catch (error) {
    return {
      success: false,
      message: 'Cannot connect to server',
    }
  }
}

export const getMe = async (token) => {
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: data.detail || 'Token is not valid',
      }
    }

    return data
  } catch (error) {
    return {
      success: false,
      message: 'Cannot connect to server',
    }
  }
}