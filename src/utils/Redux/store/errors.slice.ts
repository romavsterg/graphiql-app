import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  error: {
    message: '',
    isError: false,
  },
};

export const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    SetError: (state, { payload: error }) => {
      state.error = error;
    },
  },
});

export const { actions, reducer } = errorsSlice;
