import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return rejectWithValue('Aucun token trouvé')
    }
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',  
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
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
