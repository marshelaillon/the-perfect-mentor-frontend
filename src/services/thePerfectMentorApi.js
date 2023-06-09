import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const LOCAL = 'http://localhost:3001';

export const thePerfectMentorApi = createApi({
  reducerPath: 'thePerfectMentorApi',
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL }),
  endpoints: builder => ({
    getRoles: builder.query({
      query: () => `${LOCAL}/api/v1/role`,
    }),
  }),
});

export const { useGetRolesQuery } = thePerfectMentorApi;
