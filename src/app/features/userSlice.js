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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
