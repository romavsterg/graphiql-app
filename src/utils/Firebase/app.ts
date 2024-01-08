import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBFELcyJ53Wppi8Va6opdstquYBPNpTDIs',
  authDomain: 'graphiql-react-9a54b.firebaseapp.com',
  projectId: 'graphiql-react-9a54b',
  storageBucket: 'graphiql-react-9a54b.appspot.com',
  messagingSenderId: '77909003700',
  appId: '1:77909003700:web:12c012d9a8e1203db436e1',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const getUserByEmail = async (email: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      'your password here'
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(`Error getting user by email: ${error}`);
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    if (typeof err === 'string') {
      return err;
    } else if (err instanceof Error) {
      return err.message;
    }
  }
};

const signUp = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    if (typeof err === 'string') {
      return err;
    } else if (err instanceof Error) {
      return err.message;
    }
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, app, signUp, signIn, logout, fetchSignInMethodsForEmail };
