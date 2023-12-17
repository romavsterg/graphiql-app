import { auth, fetchSignInMethodsForEmail } from '../../Firebase/app';
import React from 'react';
import { redirect } from 'react-router-dom';

export async function loader() {
  const token = localStorage.getItem('token')?.replace(/\'/g, '');
  if (token !== undefined) {
    try {
      const user = JSON.parse(atob(token.split('.')[1]));
      const res = await fetchSignInMethodsForEmail(
        auth,
        user.firebase.identities.email[0]
      );
      if (res[0]) {
        return null;
      }
    } catch (err) {
      return redirect('/Components/auth');
    }
  }
  return redirect('/Components/auth');
}

export default function MainPage() {
  return (
    <>
      <h4>Main Page</h4>
    </>
  );
}
