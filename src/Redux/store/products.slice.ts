import { createSlice } from '@reduxjs/toolkit';
import { productsStore } from '../../@types/types';

export const initialState: productsStore = { products: [] };

export const booksSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    SetBooks(state, { payload: products }) {
      state.products = products;
    },
  },
});

export const { actions, reducer } = booksSlice;
