import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import { Context } from '../../Context/Context';
import { welcomeDictionary } from '../../dictionaries/welcomeDictionary';

export default function WelcomePage() {
  const context = useContext(Context);
  return (
    <div className="auth-container">
      <Link className="auth-link" to={'/Components/auth'}>
        {context?.language === 'English'
          ? welcomeDictionary['English'].auth
          : welcomeDictionary['Russian'].auth}
      </Link>
    </div>
  );
}
