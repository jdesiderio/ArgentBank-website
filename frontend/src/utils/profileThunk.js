// Async Thunk for Fetching and Updating User Profile

import { createAsyncThunk } from '@reduxjs/toolkit'

// Async Thunk for Fetching User Profile
export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    // Get the user token from the Redux state or sessionStorage
    const token = getState().auth.user
    
    // If no token is found, reject the promise with an error message
    if (!token) {
      return rejectWithValue('No token found')
    }

    try {
      // Send a POST request to fetch the user profile with authentication
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      const data = await response.json()
      // Check if the response status is not okay and throw an error if needed
      if (!response.ok) {
        throw new Error(data.message || 'Unable to fetch profile')
      }
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async Thunk for Updating User Profile
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ userName }, { getState, rejectWithValue }) => {
    // Get the user token from the Redux state or sessionStorage
    const token = getState().auth.user

    // If no token is found, reject the promise with an error message
    if (!token) {
      return rejectWithValue('No token found')
    }

    try {
      // Send a PUT request to update the user profile with authentication
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      })
      const data = await response.json()
      // Check if the response status is not okay and throw an error if needed
      if (!response.ok) {
        throw new Error(data.message || 'Unable to update profile')
      }
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)