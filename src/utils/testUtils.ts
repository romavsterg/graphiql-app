import { Reducer, configureStore } from '@reduxjs/toolkit';
import { detailsApi, productsApi } from '../Redux/api/api';

export const createStore = (reducer: Reducer) => {
  return configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        productsApi.middleware,
        detailsApi.middleware,
      ]),
  });
};
