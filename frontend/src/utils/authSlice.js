import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authThunk'

const tokenFromStorage = localStorage.getItem('token')

const initialState = {
  user: tokenFromStorage ? { token: tokenFromStorage } : null,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        localStorage.setItem('token', action.payload)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { signOut } = authSlice.actions
export default authSlice.reducer
