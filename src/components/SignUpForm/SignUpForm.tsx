import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../../Firebase/app';
import { schema } from '../../yup/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Form from '../../form/Form';

export default function SignUpForm() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');
  const { register, handleSubmit, formState } = useForm({
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
      navigate('/Components/main');
    }
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      authError={authError}
      formState={formState}
      register={register}
      method="signUp"
    />
  );
}
