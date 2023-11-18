import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as paramsReducer } from './params.slice';
import { detailsApi, productsApi } from '../api/api';

const reducers = combineReducers({
  params: paramsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [detailsApi.reducerPath]: detailsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      detailsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
