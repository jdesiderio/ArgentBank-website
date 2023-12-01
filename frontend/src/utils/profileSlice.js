// Profile Slice Reducer

import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile, updateProfile } from './profileThunk'
import { signOut } from './authSlice'

// Initial state for user profile
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  status: 'idle', // Loading status indicator
  error: null, // Error information
}

const profileSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      // Reducer cases for fetching user profile
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Update profile data from the action payload
        state.firstName = action.payload.body.firstName
        state.lastName = action.payload.body.lastName
        state.email = action.payload.body.email
        state.userName = action.payload.body.userName
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      // Reducer cases for updating user profile
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userName = action.payload.userName
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      // Reducer case for signing out
      .addCase(signOut, () => {
        return initialState // Reset the profile state when signing out
      })
  }
})

export default profileSlice.reducer
