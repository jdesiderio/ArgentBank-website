import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    if (!token) {
      return rejectWithValue('Aucun token trouvé')
    }
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Impossible de récupérer le profil')
      }
      return data
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error)
      return rejectWithValue(error.message)
    }
  }
)
