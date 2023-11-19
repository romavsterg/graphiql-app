import { describe, expect, test } from 'vitest';
import { createStore } from '../utils/testUtils';
import { rootReducer } from '../Redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Header/>', () => {
  test('Loads <Header/> and changes redux state when submit form', async () => {
    const store = createStore(rootReducer);
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider store={store}>
                <Header />
              </Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByTestId('search'), {
      target: { value: 'new search' },
    });
    fireEvent.change(screen.getByTestId('count'), {
      target: { value: 4 },
    });
    fireEvent.submit(screen.getByTestId('form'));
    expect(store.getState().params.search).toBe('new search');
    expect(store.getState().params.countItems).toBe(4);
  });
});
