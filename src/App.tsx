import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Main from './components/Main';
import ErrorPage from './Pages/ErrorPage';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="Components" element={<Main />} errorElement={<ErrorPage />}>
        <Route path="search" element={<Main />}>
          <Route path=":query" index element={<Main />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
