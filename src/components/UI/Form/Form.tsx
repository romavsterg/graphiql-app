import React, { useContext } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { Context } from '../../Context/Context';
import { authDictionary } from '../../../dictionaries/authDictionary';
import Error from '../Error/Error';
import Input from '../Input/Input';
import AuthButton from '../AuthButton/AuthButton';

export default function Form(Props: {
  onSubmit: () => Promise<void>;
  authError: string;
  register: UseFormRegister<{ password: string; email: string }>;
  formState: FormState<{
    password: string;
    email: string;
  }>;
  method: string;
}) {
  const context = useContext(Context);
  const errors = [
    Props.authError,
    Props.formState.errors.email?.message,
    Props.formState.errors.password?.message,
  ];
  return (
    <form className="form" noValidate onSubmit={Props.onSubmit}>
      <h5>
        {
          authDictionary[context?.language as keyof typeof authDictionary][
            Props.method as keyof (typeof authDictionary)[keyof typeof authDictionary]
          ]
        }
      </h5>
      <Input
        type="email"
        testId={Props.method + 'Email'}
        register={Props.register}
      />
      <Input
        type="password"
        testId={Props.method + 'Password'}
        register={Props.register}
      />
      {errors.map((error) => {
        if (typeof error === 'string' && error !== '') {
          return (
            <Error
              key={error}
              error={error}
              dictionary={JSON.stringify(authDictionary)}
            />
          );
        }
      })}
      <AuthButton
        testId={Props.method}
        method={Props.method}
        status={
          Props.formState.isSubmitting
            ? 'submitting'
            : Props.formState.isValid
              ? 'valid'
              : 'inValid'
        }
      />
    </form>
  );
}
