import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { VITE_LOCAL_API_URL } = import.meta.env;

export const thePerfectMentorApi = createApi({
  reducerPath: 'thePerfectMentorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_LOCAL_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = getState().auth;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
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
  }),
});

export const {
  useGetRolesQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetMeQuery,
} = thePerfectMentorApi;
