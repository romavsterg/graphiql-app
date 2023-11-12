import { describe, test, expect } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Result from '../components/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from '../Context/context';

describe('<Result />', () => {
  test('Result displays cards', async () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="*"
            element={
              <Context.Provider
                value={{
                  search: 'Tom',
                  countItems: 6,
                  books: [],
                  details: null,
                }}
              >
                <Result />
              </Context.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    );
    expect(container).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.queryByText('loading...'), {
      timeout: 15000,
    });
    expect(await screen.findAllByRole('list')).toBeTruthy();
    screen.debug();
  });
});
