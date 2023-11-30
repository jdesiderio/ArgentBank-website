import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),  // Changed from username to email
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Unable to login')
      }
      return data
    } catch (error) {
      console.error('Login error:', error)  // Modified error message
      return rejectWithValue(error.message)
    }
  }
)
