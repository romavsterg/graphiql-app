import { object, string } from 'yup';
export const schema = object().shape({
  email: string().email().required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be 8 chars minimum')
    .matches(
      /(?=.*[!@#$%^&*_-])(?=.*[0-9])(?=.*[a-zA-Z])/,
      'Pasword must contain 1 number, 1 letter, 1 special character'
    ),
});
