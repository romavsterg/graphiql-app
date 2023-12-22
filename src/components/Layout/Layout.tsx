import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { ContextProvider } from '../Context/Context';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import { useGetErrors } from '../../utils/Redux/hooks/useGetErrors';
import ErrorPopup from '../UI/ErrorPopup/ErrorPopup';

export default function Layout() {
  const errors = useGetErrors();
  return (
    <ContextProvider>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      {errors.error.isError && <ErrorPopup error={errors.error.message} />}
    </ContextProvider>
  );
}
