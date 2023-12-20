import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { ContextProvider } from '../Context/Context';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import { useGetErrors } from '../../utils/Redux/hooks/useGetErrors';
import { useActions } from '../../utils/Redux/hooks/useActions';

export default function Layout() {
  const { SetError } = useActions();
  const errors = useGetErrors();
  const handleClick = () => {
    SetError({ isError: false, message: '' });
  };
  return (
    <ContextProvider>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      {errors.error.isError && (
        <div className="popup error">
          <div className="message">
            <p className="error-message">{errors.error.message}</p>
          </div>
          <div className="action">
            <button className="close-button" onClick={handleClick}>
              Ok
            </button>
          </div>
        </div>
      )}
    </ContextProvider>
  );
}
