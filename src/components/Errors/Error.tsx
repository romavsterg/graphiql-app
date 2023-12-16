import { Context } from '../../Context/Context';
import { authDictioanry } from '../../dictionaries/authDictionary';
import React, { useContext } from 'react';

export default function Error(Props: { error: string }) {
  const context = useContext(Context);
  return (
    <span className="password-error">
      {
        authDictioanry[context?.language as keyof typeof authDictioanry][
          Props.error as keyof (typeof authDictioanry)[keyof typeof authDictioanry]
        ]
      }
    </span>
  );
}
