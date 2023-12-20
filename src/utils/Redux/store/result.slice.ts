import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: '',
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, { payload: data }) => {
      state.data = data;
    },
  },
});

export const { actions, reducer } = resultSlice;
