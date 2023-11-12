import { describe, test, expect } from 'vitest';
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Result from '../components/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from '../Context/context';
import NotFound from '../Pages/NotFound';
import Main from '../components/Main';

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
  });
});
describe('404', () => {
  test('renders a <NotFound page when navigating to invalid route', () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('go 404'));
    expect(screen.findByText('Return to main')).toBeTruthy;
  });
});
