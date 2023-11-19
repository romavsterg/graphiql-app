import { describe, test, expect } from 'vitest';
import {
  screen,
  render,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from '../components/Result';
import { Provider } from 'react-redux';
import { createStore } from '../utils/testUtils';
import { rootReducer } from '../Redux/store/store';

describe('<Result/>', () => {
  test('Loads <Result/> with products', async () => {
    const store = createStore(rootReducer);
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Provider store={store}>
                <Result />
              </Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    );
    await waitForElementToBeRemoved(screen.getByText('loading...'));
    screen.getAllByRole('listitem').forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    expect(store.getState()).toBeTruthy();
  });
  test('Loads <Result/> with products and <Details/> with details', async () => {
    const store = createStore(rootReducer);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Result />} />
            <Route path="/Components/search:query" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    await waitForElementToBeRemoved(screen.getByText('loading...'));
    screen.getAllByRole('listitem').forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    expect(store.getState()).toBeTruthy();
    fireEvent.click(screen.getAllByTestId('product-card')[0]);
  });
});
