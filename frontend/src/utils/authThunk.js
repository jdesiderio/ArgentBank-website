import { createAsyncThunk } from '@reduxjs/toolkit'
//import { fetchProfile } from './profileThunk'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Unable to login')
      }
      return data
    } catch (error) {
      console.error('Erreur lors de la connexion:', error)
      return rejectWithValue(error.message)
    }
  }
)