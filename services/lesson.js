const API_URL = 'http://192.168.0.144:8000'

export const getGrammars = async (token) => {
  const response = await fetch(`${API_URL}/lessons/grammar`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to get grammar lessons')
  }

  return response.json()
}


export const getVocabularies = async (token) => {
  const response = await fetch(`${API_URL}/lessons/vocabulary`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to get vocabulary lessons')
  }

  return response.json()
}