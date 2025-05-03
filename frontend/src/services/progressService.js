const API_URL = process.env.REACT_APP_API_URL + '/progress';

export async function saveProgress(userId, exerciseId, status) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, exerciseId, status })
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
}

export async function getProgress(userId) {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching progress:', error);
    throw error;
  }
}
