import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import { reducer as paramsReducer } from './params.slice';
import { detailsApi, productsApi } from '../api/api';

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

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
