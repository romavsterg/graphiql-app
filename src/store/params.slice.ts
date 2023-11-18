import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: localStorage.getItem('search') || '',
  page: 1,
  details: null,
  countItems: 6,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    SetSearch: (state, { payload: search }) => {
      state.search = search;
    },
    SetPage: (state, { payload: newPage }) => {
      state.page = newPage;
    },
    SetDetails: (state, { payload: details }) => {
      state.details = details;
    },
    SetCountItems: (state, { payload: countItems }) => {
      state.countItems = countItems;
    },
  },
});

export const { actions, reducer } = searchSlice;
