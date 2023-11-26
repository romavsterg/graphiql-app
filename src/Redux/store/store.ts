import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import { reducer as paramsReducer } from './params.slice';
import { detailsApi, productsApi } from '../api/api';
import { createWrapper } from 'next-redux-wrapper';

export const rootReducer = combineReducers({
  params: paramsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [detailsApi.reducerPath]: detailsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      detailsApi.middleware,
    ]),
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        productsApi.middleware,
        detailsApi.middleware,
      ]),
  });

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type MakeStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<MakeStore>(makeStore, { debug: true });
