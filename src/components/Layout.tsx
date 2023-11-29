import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';

export default function Layout() {
  return (
    <div className="container">
      <header>
        <h1>React. Forms</h1>
        <Link to="/Components">Main page</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
