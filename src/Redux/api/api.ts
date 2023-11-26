import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const API_URL = 'https://dummyjson.com/products/';

export const productsApi = createApi({
  reducerPath: 'products',
  tagTypes: ['products'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getProducts: builder.query<
      null,
      { name: string; count: number; page: number }
    >({
      query: (arg) => {
        return {
          url: '/search',
          params: {
            q: decodeURI(arg.name),
            limit: arg.count || 1,
            skip: arg.page > 1 ? arg.page * arg.count - 1 : 0,
          },
        };
      },
    }),
  }),
});

export const detailsApi = createApi({
  reducerPath: 'details',
  tagTypes: ['details'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getDetails: builder.query<null, { id: string }>({
      query: (arg) => {
        return {
          url: `/${arg.id}`,
        };
      },
    }),
  }),
});

export const { useGetDetailsQuery } = detailsApi;
export const {
  useGetProductsQuery,
  util: { getRunningQueriesThunk },
} = productsApi;
export const { getProducts } = productsApi.endpoints;
