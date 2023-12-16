import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css';
import SignInForm from '../../components/SignInForm/SignInForm';

export default function AuthPage() {
  return (
    <div className="forms">
      <SignUpForm />
      <SignInForm />
    </div>
  );
}
