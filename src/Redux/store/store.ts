import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as DataReducer } from './data.slice';

export const rootReducer = combineReducers({
  data: DataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
