import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import { isSignedIn } from '../../utils/checkIsSignedIn';
import Error from '../../components/UI/Error/Error';
import { welcomeDictionary } from '../../dictionaries/welcomeDictionary';
import { Context } from '../../components/Context/Context';

export default function WelcomePage() {
  const context = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const check = async () => {
      const res = await isSignedIn();
      if (typeof res === 'boolean') {
        setSignedIn(res);
      } else if (typeof res === 'string') {
        const errorMatch = res.match(/auth\/(.*)\)\./);
        if (errorMatch?.length) {
          setError(errorMatch[1]);
        } else {
          setError('unknown error');
        }
      }
      setLoading(false);
    };
    check();
  }, []);
  return (
    <div className="auth-container">
      {loading ? (
        <p>
          {
            welcomeDictionary[
              context?.language as keyof typeof welcomeDictionary
            ].loading
          }
        </p>
      ) : error !== '' ? (
        <Error error={error} dictionary={JSON.stringify(welcomeDictionary)} />
      ) : signedIn ? (
        <Link to={'/Components/main'}>
          {
            welcomeDictionary[
              context?.language as keyof typeof welcomeDictionary
            ].mainPage
          }
        </Link>
      ) : (
        <Link className="auth-link" to={'/Components/auth'}>
          {
            welcomeDictionary[
              context?.language as keyof typeof welcomeDictionary
            ].auth
          }
        </Link>
      )}
    </div>
  );
}
