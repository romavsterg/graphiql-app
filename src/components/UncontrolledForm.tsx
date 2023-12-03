import React, { useState } from 'react';
import { useActions } from '../Redux/hooks/useActions';
import { useGetData } from '../Redux/hooks/useGetData';
import { schema } from '../utils/schema';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function UncontroledForm() {
  const navigate = useNavigate();
  const actions = useActions();
  const [error, setError] = useState<null | string>();

  const data = useGetData();

  const onImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.onload = function () {
        actions.setImage({ path: reader.result as string, name: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validate(data);
      setError(null);
      navigate('/Components');
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">
          <p>Name: </p>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              actions.SetName(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="age">
          <p>Age:</p>
          <input
            id="age"
            type="number"
            value={data.age}
            min={1}
            max={99}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              actions.SetAge(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              actions.SetEmail(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            id="password"
            type="password"
            value={data.password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              actions.SetPassword(e.currentTarget.value)
            }
          />
        </label>
        <label style={{ width: '400px' }} htmlFor="Password">
          <p>Confirm password:</p>
          <input
            id="Password"
            type="password"
            value={data.Password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              actions.SetPassworD(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="gender">
          <p>Gender: </p>
          <select
            id="gender"
            value={data.gender}
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              actions.SetGender(e.currentTarget.value)
            }
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label htmlFor="T&C">
          <p>Accept T&C</p>
          <input
            id="T&C"
            checked={data.policyAgreement}
            type="checkbox"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              e;
              actions.SetPolicyAgreement();
            }}
          />
        </label>
        <label htmlFor="country">
          <p>Country:</p>
          <input
            id="country"
            type="country"
            value={data.country}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              actions.SetCountry(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="picture">
          <input type="file" id="picture" onChange={onImageChange} />
        </label>
        <button type="submit">Sumbit</button>
        {error && <h2>{error}</h2>}
      </form>
    </>
  );
}
