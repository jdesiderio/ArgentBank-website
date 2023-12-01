// Async Thunk for User Login

import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Send a POST request to the login endpoint with email and password
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      // Check if the response status is not okay and throw an error if needed
      if (!response.ok) {
        throw new Error(data.message || 'Unable to login')
      }
      return data
    } catch (error) {
      console.error('Login error:', error)
      return rejectWithValue(error.message)
    }
  }
)
