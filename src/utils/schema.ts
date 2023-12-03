import { object, string, number, ref, boolean } from 'yup';
export const schema = object().shape({
  name: string().required('Name is required'),
  age: number().required('Age is required').integer().min(1).max(99),
  email: string().email().required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be 8 chars minimum')
    .matches(
      /(?=.*[!@#$%^&*_-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/,
      'Pasword must contain 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  Password: string()
    .required('Confirm Password is required')
    .oneOf([ref('password')], 'Passwords must match'),
  gender: string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Gender must be male or female'),
  policyAgreement: boolean()
    .required('Agreement is required')
    .oneOf([true], 'You must agree T&C to use the service'),
  country: string().required('Country is required'),
  image: object().required('Image is required'),
});
