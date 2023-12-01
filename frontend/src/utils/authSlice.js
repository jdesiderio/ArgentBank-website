// Redux Toolkit Slice for Authentication

import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authThunk'

// Initialize initial state with user data from sessionStorage if available
const tokenFromStorage = sessionStorage.getItem('token')
const initialState = {
  user: tokenFromStorage ? { token: tokenFromStorage } : null, // User data including token
  isLoading: false, // Loading state indicator
  error: null, // Error information
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer for signing out a user
    signOut: (state) => {
      state.user = null
      sessionStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      // Reducer cases for the loginUser thunk
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.body.token
        sessionStorage.setItem('token', action.payload.body.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { signOut } = authSlice.actions
export default authSlice.reducer
