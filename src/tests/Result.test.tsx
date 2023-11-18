import { describe, test, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
import Main from '../components/Main';

describe('<Result />', () => {
  // here will be test for redux
});
describe('404', () => {
  test('renders a <NotFound page when navigating to invalid route', () => {
    render(
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
