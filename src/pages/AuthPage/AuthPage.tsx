import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css';
import SignInForm from '../../components/SignInForm/SignInForm';
import { isSignedIn } from '../../utils/checkIsSignedIn';
import { redirect } from 'react-router-dom';

export async function loader() {
  const isUserSignedIn = await isSignedIn();
  if (isUserSignedIn) {
    return redirect('/graphiql-app/main');
  }
  return null;
}

export default function AuthPage() {
  return (
    <div className="forms">
      <SignUpForm />
      <SignInForm />
    </div>
  );
}
