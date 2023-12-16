import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../../Firebase/app';
import { schema } from '../../yup/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Error from '../Errors/Error';

export default function SignUpForm() {
  const [authError, setAuthError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: { password: string; email: string }) => {
    const res = await signUp(data.email, data.password);
    if (typeof res === 'string') {
      const errorMatch = res.match(/auth\/(.*)\)\./);
      if (errorMatch?.length) {
        setAuthError(errorMatch[1]);
      } else {
        setAuthError('unknown error');
      }
    } else {
      setAuthError('');
      const token = await res?.user.getIdToken();
      localStorage.setItem('token', JSON.stringify(token));
    }
  };
  return (
    <form className="signup-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <h4>Sign up</h4>
      <input
        type="password"
        {...register('password')}
        name="password"
        placeholder="password"
      />
      <input
        type="email"
        {...register('email')}
        name="email"
        placeholder="email"
      />
      <button type="submit">Sign up</button>
      {errors.password?.message && <Error error={errors.password.message} />}
      {errors.email?.message && <Error error={errors.email.message} />}
      {authError !== '' && <Error error={authError} />}
    </form>
  );
}