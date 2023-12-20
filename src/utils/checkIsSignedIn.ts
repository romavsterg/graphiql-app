import { auth } from './Firebase/app';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

export async function isSignedIn() {
  const token = localStorage.getItem('token')?.replace(/\'/g, '');
  if (token !== undefined) {
    try {
      const user = JSON.parse(atob(token.split('.')[1]));
      const res = await fetchSignInMethodsForEmail(
        auth,
        user.firebase.identities.email[0]
      );
      if (res[0]) {
        return true;
      }
    } catch (err) {
      if (typeof err === 'string') {
        return err;
      } else if (err instanceof Error) {
        return err.message;
      }
    }
    return false;
  }
  return false;
}
