import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  query: ``,
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
    setApiUrl: (state, { payload: apiUrl }) => {
      state.apiUrl = apiUrl;
    },
  },
});

export const { actions, reducer } = querySlice;
