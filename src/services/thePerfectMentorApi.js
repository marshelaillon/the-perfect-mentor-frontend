import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const LOCAL = 'http://localhost:3001';

export const thePerfectMentorApi = createApi({
  reducerPath: 'thePerfectMentorApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL }),
  endpoints: builder => ({
    getRoles: builder.query({
      query: () => `${LOCAL}/api/v1/role`,
    }),
    registerUser: builder.mutation({
      query: userData => ({
        url: `${LOCAL}/api/v1/user`,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useGetRolesQuery, useRegisterUserMutation } =
  thePerfectMentorApi;
