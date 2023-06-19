import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    email: '',
    role: '',
    createdAt: '',
    iat: '',
    exp: '',
  },
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.createdAt = action.payload.createdAt;
      state.iat = action.payload.iat;
      state.exp = action.payload.exp;
    },
    clearUserData: state => {
      state._id = '';
      state.email = '';
      state.role = '';
      state.createdAt = '';
      state.iat = '';
      state.exp = '';
    },
  },
});

export const { setUser, clearUserData } = userSlice.actions;
export default userSlice.reducer;
