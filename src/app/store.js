import { configureStore } from '@reduxjs/toolkit';
import { thePerfectMentorApi } from '../services/thePerfectMentorApi';

export default configureStore({
  reducer: {
    [thePerfectMentorApi.reducerPath]: thePerfectMentorApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thePerfectMentorApi.middleware),
});
