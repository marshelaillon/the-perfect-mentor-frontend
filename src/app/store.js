import { configureStore } from '@reduxjs/toolkit';
import { thePerfectMentorApi } from '../services/thePerfectMentorApi';
import authReducer from './features/authSlice';

export default configureStore({
  reducer: {
    [thePerfectMentorApi.reducerPath]: thePerfectMentorApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thePerfectMentorApi.middleware),
});
