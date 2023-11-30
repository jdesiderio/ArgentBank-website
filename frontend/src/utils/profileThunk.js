import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    const user = getState().auth.user.token
    if (!user) {
      return rejectWithValue('No token found')
    }

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user}`,
        }
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Unable to fetch profile')
      }
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
