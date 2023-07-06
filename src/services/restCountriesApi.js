import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const REST_COUNTRIES_API_BASE_URL = 'https://restcountries.com/v3.1';

export const restCountriesApi = createApi({
  reducerPath: 'restCountriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: REST_COUNTRIES_API_BASE_URL,
  }),
  endpoints: builder => ({
    getCountries: builder.query({
      query: () => `/all?fields=name,flags`,
    }),
  }),
});

export const { useGetCountriesQuery } = restCountriesApi;
