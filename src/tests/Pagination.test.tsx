import { describe, expect, test } from 'vitest';
import { createStore } from '../utils/testUtils';
import { rootReducer } from '../Redux/store/store';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Pagination from '../components/Pagination';

describe('<Pagination/>', () => {
  test('Loads <Pagination/> and changes redux state when go to another page', async () => {
    const store = createStore(rootReducer);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pagination />} />
            <Route path="/Components/search" element={<Pagination />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    const prevButton = screen.getByTestId('prev-arrow');
    const nextButton = screen.getByTestId('next-arrow');
    fireEvent.click(prevButton);
    expect(store.getState().params.page).toBe(1);
    fireEvent.click(nextButton);
    expect(store.getState().params.page).toBe(2);
    fireEvent.click(prevButton);
    expect(store.getState().params.page).toBe(1);
  });
});
