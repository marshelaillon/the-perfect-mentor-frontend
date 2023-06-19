import { createSlice } from '@reduxjs/toolkit';

const accessToken = 'xGnO9A';
const refreshToken = 'Y7tB2z';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem(accessToken) || null,
    refreshToken: localStorage.getItem(refreshToken) || null,
  },
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem(accessToken, action.payload.accessToken);
      localStorage.setItem(refreshToken, action.payload.refreshToken);
    },
    clearTokens: state => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem(accessToken);
      localStorage.removeItem(refreshToken);
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;
export default authSlice.reducer;
