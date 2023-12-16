import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from '../../Firebase/app';
import { schema } from '../../yup/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Error from '../Errors/Error';
import { useNavigate } from 'react-router-dom';
import { authDictioanry } from '../../dictionaries/authDictionary';
import { Context } from '../../Context/Context';

export default function SignInForm() {
  const context = useContext(Context);
  const navigate = useNavigate();
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
    console.log(data);
    const res = await signIn(data.email, data.password);
    console.log(res);
    if (typeof res === 'string') {
      const errorMatch = res.match(/auth\/(.*)\)\./);
      if (errorMatch?.length) {
        setAuthError(errorMatch[1]);
        console.log(authError);
      } else {
        setAuthError('unknown error');
      }
    } else {
      setAuthError('');
      const token = await res?.user.getIdToken();
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/Components/main');
    }
  };
  return (
    <form className="signup-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <h4>
        {
          authDictioanry[context?.language as keyof typeof authDictioanry]
            .signIn
        }
      </h4>
      <input
        type="password"
        {...register('password')}
        name="password"
        placeholder={
          authDictioanry[context?.language as keyof typeof authDictioanry]
            .password
        }
      />
      <input
        type="email"
        {...register('email')}
        name="email"
        placeholder={
          authDictioanry[context?.language as keyof typeof authDictioanry].email
        }
      />
      <button type="submit">
        {
          authDictioanry[context?.language as keyof typeof authDictioanry]
            .signIn
        }
      </button>
      {errors.password?.message && <Error error={errors.password.message} />}
      {errors.email?.message && <Error error={errors.email.message} />}
      {authError !== '' && <Error error={authError} />}
    </form>
  );
}
