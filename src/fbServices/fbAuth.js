import { auth } from './fb';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

export const signup = async (email, psw) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, psw);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorMessage, errorCode);
  }
};

export const login = async (email, psw) => {
  try {
    return await signInWithEmailAndPassword(auth, email, psw);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw Error(errorMessage, errorCode);
  }
};

export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw Error(errorMessage, errorCode);
  }
};

export const resetPassword = async (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      alert('Email send to ' + email + ' with reset link');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      return errorCode;
    });
};

export const rememberMe = (email, password) => {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.

      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // return errorCode, errorMessage;
    });
};
