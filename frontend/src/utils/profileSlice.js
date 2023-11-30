import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from './profileThunk'
import { signOut } from './authSlice'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  status: 'idle',
  error: null
}

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.firstName = action.payload.body.firstName
        state.lastName = action.payload.body.lastName
        state.email = action.payload.body.email
        state.username = action.payload.body.userName
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(signOut, () => {
        return initialState
      })
  }
})

export default profileSlice.reducer
