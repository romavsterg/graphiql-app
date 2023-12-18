import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { ContextProvider } from '../../Context/Context';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';

export default function Layout() {
  return (
    <ContextProvider>
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
}
