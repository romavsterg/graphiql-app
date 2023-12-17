import { Context } from '../../Context/Context';
import { authDictionary } from '../../dictionaries/authDictionary';
import React, { useContext } from 'react';
import './AuthButton.css';

export default function AuthButton(Props: { method: string; status: string }) {
  const context = useContext(Context);
  return (
    <button
      type="submit"
      className={`auth-btn ${
        Props.status === 'inValid' || Props.status === 'submitting'
          ? 'disabled'
          : ''
      }`}
      disabled={Props.status === 'inValid'}
    >
      {Props.status === 'inValid' &&
        authDictionary[context?.language as keyof typeof authDictionary]
          .invalidFields}
      {Props.status === 'valid' &&
        authDictionary[context?.language as keyof typeof authDictionary][
          Props.method as keyof (typeof authDictionary)[keyof typeof authDictionary]
        ]}
      {Props.status === 'submitting' &&
        authDictionary[context?.language as keyof typeof authDictionary][
          Props.method.replace(
            'sign',
            'signing'
          ) as keyof (typeof authDictionary)[keyof typeof authDictionary]
        ]}
    </button>
  );
}
