import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  search: '',
  page: 1,
  details: null,
  countItems: 6,
};

export const paramsSlice = createSlice({
  name: 'params',
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

export const { actions, reducer } = paramsSlice;
