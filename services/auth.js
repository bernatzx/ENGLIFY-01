export const login = async (email, password) => {
  if (
    email === 'test@gmail.com' &&
    password === '123456'
  ) {
    return {
      success: true,
      user: {
        id: 1,
        name: 'Test User',
        email: 'test@gmail.com',
      },
    }
  }

  return {
    success: false,
    message: 'Email atau password salah',
  }
}