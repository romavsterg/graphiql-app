import React, { useContext } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Context } from '../../../Context/Context';
import { authDictionary } from '../../../dictionaries/authDictionary';

export default function Input(Props: {
  type: 'email' | 'password';
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;
}) {
  const context = useContext(Context);
  return (
    <input
      {...Props.register(Props.type)}
      type={Props.type}
      name={Props.type}
      placeholder={
        authDictionary[context?.language as keyof typeof authDictionary][
          Props.type as keyof (typeof authDictionary)[keyof typeof authDictionary]
        ]
      }
    />
  );
}
