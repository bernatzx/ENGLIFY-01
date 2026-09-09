const API_URL = 'http://192.168.0.144:8000'

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