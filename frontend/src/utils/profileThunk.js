import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth.user
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Unable to fetch profile');
      }
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
      return rejectWithValue(error.message);
    }
  }
);
