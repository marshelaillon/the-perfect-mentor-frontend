import { configureStore } from '@reduxjs/toolkit';
import { thePerfectMentorApi } from '../services/thePerfectMentorApi';
import { restCountriesApi } from '../services/restCountriesApi';
import authReducer from './features/authSlice';
import userSlice from './features/userSlice';

export default configureStore({
  reducer: {
    [thePerfectMentorApi.reducerPath]: thePerfectMentorApi.reducer,
    [restCountriesApi.reducerPath]: restCountriesApi.reducer,
    auth: authReducer,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(thePerfectMentorApi.middleware)
      .concat(restCountriesApi.middleware),
});
