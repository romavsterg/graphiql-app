import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorElement from '../ErrorElement';
import MainPage, {
  loader as mainPageLoader,
} from '../../pages/MainPage/MainPage';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import AuthPage, { loader as authLoader } from '../../pages/AuthPage/AuthPage';
import './index.css';
import NotFound from '../../pages/NotFoundPage/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="Components"
      element={<Layout />}
      errorElement={<ErrorElement />}
    >
      <Route index element={<WelcomePage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="auth" element={<AuthPage />} loader={authLoader} />
      <Route path="main" element={<MainPage />} loader={mainPageLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
