import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.user?.token || sessionStorage.getItem('token')
    if (!token) {
      return rejectWithValue('No token found')
    }

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
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

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ userName }, { getState, rejectWithValue }) => {
    const token = getState().auth.user?.token || sessionStorage.getItem('token')
    if (!token) {
      return rejectWithValue('No token found')
    }

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Unable to update profile')
      }
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

