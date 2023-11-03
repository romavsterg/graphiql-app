import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Main from './components/Main';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Components" element={<Main />} errorElement={<ErrorPage />}>
      <Route path="search" element={<Main />}>
        <Route path=":query" element={<Main />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
