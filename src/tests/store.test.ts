import { describe, expect, test } from 'vitest';
import {
  initialState as initialParamsState,
  reducer as paramsReducer,
} from '../Redux/store/params.slice';
import {
  initialState as initialDetailsState,
  reducer as detailsReducer,
} from '../Redux/store/details.slice';
import {
  initialState as initialproductsState,
  reducer as productsReducer,
} from '../Redux/store/products.slice';
import { rootReducer } from '../Redux/store/store';

describe('Loads initial state', () => {
  test('In params reducer', () => {
    const state = paramsReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialParamsState);
  });
  test('In details reducer', () => {
    const state = detailsReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialDetailsState);
  });
  test('In products reducer', () => {
    const state = productsReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialproductsState);
  });
  test('In Root reducer', () => {
    const state = rootReducer(undefined, { type: 'unknown' });
    expect(state).toHaveProperty('params', initialParamsState);
  });
});
