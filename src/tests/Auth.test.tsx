import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  act,
} from '@testing-library/react';
import { test } from 'vitest';
import AuthPage, { loader as authLoader } from '../pages/AuthPage/AuthPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from '../components/Context/Context';
import MainPage, { loader as mainPageLoader } from '../pages/MainPage/MainPage';
import { ReduxProvider } from '../utils/Redux/ReduxProvider';

test('signs in a user', async () => {
  const screen = render(
    <ContextProvider>
      <ReduxProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<AuthPage />} loader={authLoader} />
            <Route
              path="graphiql-app/main"
              element={<MainPage />}
              loader={mainPageLoader}
            />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </ContextProvider>
  );
  const emailInput = await screen.findByTestId('signInEmail');
  const passwordInput = await screen.findByTestId('signInPassword');
  // Fill in the form
  const submitButton = await screen.findByTestId('signIn');

  await act(async () => {
    await fireEvent.change(emailInput, {
      target: { value: 'poiuytrewQ1@gmail.com' },
    });
    await fireEvent.change(passwordInput, {
      target: { value: 'poiuytrewQ1@' },
    });
    await fireEvent.submit(submitButton);
  });
  screen.debug();
  console.log(localStorage.getItem('token'));
  await waitForElementToBeRemoved(submitButton);
});
