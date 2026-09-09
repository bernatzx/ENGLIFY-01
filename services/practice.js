const API_URL = 'http://192.168.0.144:8000'

export const getDailyPractice = async (token) => {
  const response = await fetch(`${API_URL}/practices/daily`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get daily practice");
  }

  return response.json();
};

export const correctPractice = async (token, data) => {
  const response = await fetch(`${API_URL}/practices/correction`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)

    throw new Error(
      errorData?.detail || 'Failed to correct practice'
    )
  }

  return response.json()
}