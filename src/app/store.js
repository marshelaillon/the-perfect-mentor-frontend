import { configureStore } from '@reduxjs/toolkit';
import { thePerfectMentorApi } from '../services/thePerfectMentorApi';
import authReducer from './features/authSlice';
import userSlice from './features/userSlice';

export default configureStore({
  reducer: {
    [thePerfectMentorApi.reducerPath]: thePerfectMentorApi.reducer,
    auth: authReducer,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thePerfectMentorApi.middleware),
});
