import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  name: '',
  age: 1,
  email: '',
  password: '',
  Password: '',
  gender: 'male',
  policyAgreement: false,
  country: navigator.language.replace(/\w*-/, ''),
  image: { path: '', name: '' },
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    SetName: (state, { payload: Name }) => {
      state.name = Name;
    },
    SetAge: (state, { payload: age }) => {
      state.age = age;
    },
    SetEmail: (state, { payload: email }) => {
      state.email = email;
    },
    SetPassword: (state, { payload: password }) => {
      state.password = password;
    },
    SetPassworD: (state, { payload: Password }) => {
      state.Password = Password;
    },
    SetGender: (state, { payload: gender }) => {
      state.gender = gender;
    },
    SetPolicyAgreement: (state) => {
      state.policyAgreement = !state.policyAgreement;
    },
    SetCountry: (state, { payload: country }) => {
      state.country = country;
    },
    setImage: (state, { payload: image }) => {
      state.image = image;
    },
  },
});

export const { actions, reducer } = dataSlice;
