import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <nav>
      <Link to="uncontrolled-form">Uncontrolled form</Link>
      <Link to="React-hook-form">React Hook Form</Link>
    </nav>
  );
}
