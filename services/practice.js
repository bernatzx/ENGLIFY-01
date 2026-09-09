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