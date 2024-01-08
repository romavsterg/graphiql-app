import React from 'react';
import QueryEditor from '../../components/QueryEditor/QueryEditor';
import QueryResult from '../../components/QueryResult/QueryResult';
import { auth, fetchSignInMethodsForEmail } from '../../utils/Firebase/app';
import { redirect } from 'react-router-dom';
import './MainPage.css';

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
      return redirect('/graphiql-app/auth');
    }
  }
  return redirect('/graphiql-app/auth');
}

export default function MainPage() {
  return (
    <>
      <div className="query-container">
        <QueryEditor />
        <QueryResult />
      </div>
    </>
  );
}
