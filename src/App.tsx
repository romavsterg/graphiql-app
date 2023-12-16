import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorElement from './components/ErrorElement';
import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthPage from './pages/AuthPage/AuthPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="Components"
      element={<Layout />}
      errorElement={<ErrorElement />}
    >
      <Route index element={<WelcomePage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="main" element={<MainPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
