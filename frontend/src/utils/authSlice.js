import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authThunk'

const tokenFromStorage = sessionStorage.getItem('token')

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
      sessionStorage.removeItem('token')
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