import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearTokens, setTokens } from '../app/features/authSlice';

const { VITE_LOCAL_API_URL } = import.meta.env;

const baseQuery = fetchBaseQuery({
  baseUrl: VITE_LOCAL_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    } else {
      headers.set('authorization', null);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 401) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const state = api.getState();
    const { refreshToken } = state.auth;

    const refreshOptions = {
      url: '/api/v1/sessions/refresh',
      method: 'POST',
      headers: {},
    };

    // Only add 'x-refresh' header if refreshToken is available
    if (refreshToken) {
      refreshOptions.headers = {
        ...refreshOptions.headers,
        'x-refresh': refreshToken,
      };
    }

    const refreshResult = await baseQuery(refreshOptions, api, extraOptions);

    if (refreshResult?.data) {
      console.log(refreshResult?.data, 'REFRESH RESULT DATA');
      // store the new token
      api.dispatch(setTokens({ ...refreshResult.data, refreshToken: '123' }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearTokens());
      window.location.href = '/';
      // args.headers.authorization = null;
    }
  }

  return result;
};

export const thePerfectMentorApi = createApi({
  reducerPath: 'thePerfectMentorApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: builder => ({
    getRoles: builder.query({
      query: () => `${VITE_LOCAL_API_URL}/api/v1/role`,
    }),
    registerUser: builder.mutation({
      query: userData => ({
        url: `${VITE_LOCAL_API_URL}/api/v1/user`,
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: loginData => ({
        url: `${VITE_LOCAL_API_URL}/api/v1/user/login`,
        method: 'POST',
        body: loginData,
      }),
    }),
    getMe: builder.query({
      query: () => `${VITE_LOCAL_API_URL}/api/v1/user/me`,
    }),
    updateUserData: builder.mutation({
      query: newData => ({
        url: `${VITE_LOCAL_API_URL}/api/v1/user/`,
        method: 'PATCH',
        body: newData,
      }),
    }),
  }),
});

export const updateUserData = async (newUserData, userId, accessToken) => {
  try {
    const response = await fetch(
      `${VITE_LOCAL_API_URL}/api/v1/user/${userId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newUserData),
      }
    );
    const jsonRes = await response.json();
    return jsonRes;
  } catch (error) {
    console.log(error);
  }
};

export const {
  useGetRolesQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetMeQuery,
  useUpdateUserDataMutation,
} = thePerfectMentorApi;
