import { createSlice } from '@reduxjs/toolkit';
import { detailsStore } from '../@types/types';

const initialState: detailsStore = { details: null };

export const booksSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    SetBooks(state, { payload: details }) {
      state.details = details;
    },
  },
});

export const { actions, reducer } = booksSlice;
