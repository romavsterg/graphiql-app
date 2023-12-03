import React from 'react';
import '../styles/UncotrolledFormPage.css';
import { useActions } from '../Redux/hooks/useActions';
import { useGetData } from '../Redux/hooks/useGetData';

export default function UncotrolledFormPage() {
  const {
    SetName,
    SetAge,
    SetEmail,
    SetPassword,
    SetPassworD,
    SetGender,
    SetPolicyAgreement,
    SetCountry,
  } = useActions();

  const {
    name,
    age,
    email,
    password,
    Password,
    gender,
    policyAgreement,
    country,
  } = useGetData();

  return (
    <div>
      <h2>Uncontrolled form</h2>
      <form>
        <label htmlFor="name">
          <p>Name: </p>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              SetName(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="age">
          <p>Age:</p>
          <input
            id="age"
            type="number"
            value={age}
            min={1}
            max={99}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              SetAge(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              SetEmail(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              SetPassword(e.currentTarget.value)
            }
          />
        </label>
        <label style={{ width: '400px' }} htmlFor="Password">
          <p>Confirm password:</p>
          <input
            id="Password"
            type="password"
            value={Password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              SetPassworD(e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="gender">
          <p>Gender: </p>
          <select
            id="gender"
            value={gender}
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              SetGender(e.currentTarget.value)
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
            checked={policyAgreement}
            type="checkbox"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              e;
              SetPolicyAgreement();
            }}
          />
        </label>
        <label htmlFor="country">
          <p>Country:</p>
          <input
            id="country"
            type="country"
            value={country}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              SetCountry(e.currentTarget.value)
            }
          />
        </label>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}
