import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUserData: state => {
      return {};
    },
  },
});

export const { setUser, clearUserData } = userSlice.actions;
export default userSlice.reducer;
