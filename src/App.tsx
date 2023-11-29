import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout';
import ErrorElement from './components/ErrorElement';
import MainPage from './pages/MainPage';
import UncotrolledFormPage from './pages/UncotrolledFormPage';
import ReactHookFormPage from './pages/ReactHookFormPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path="/Components/*"
        element={<Layout />}
        errorElement={<ErrorElement />}
      >
        <Route index element={<MainPage />} />
        <Route path="uncontrolled-form" element={<UncotrolledFormPage />} />
        <Route path="React-hook-form" element={<ReactHookFormPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
