import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import { reducer as errorsReducer } from './errors.slice';
import { reducer as resultReducer } from './result.slice';
import { reducer as queryReducer } from './query.slice';

export const rootReducer = combineReducers({
  errors: errorsReducer,
  result: resultReducer,
  query: queryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
