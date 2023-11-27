import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from './profileThunk'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  userName: '', 
  isLoading: false,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false
        const { email, firstName, lastName, userName } = action.payload
        state.email = email
        state.firstName = firstName
        state.lastName = lastName
        state.userName = userName
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { updateUserName } = profileSlice.actions
export default profileSlice.reducer
