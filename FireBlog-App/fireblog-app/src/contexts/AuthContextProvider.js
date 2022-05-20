import React, {useContext, createContext} from 'react';
import { auth, googleProvider } from '../helpers/firebaseUtil';

//Create context for autentication data
const AuthContext = createContext();

// Defina a function to get data from Auth context
export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut();
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ promt: "select_account"});
    auth.signWithPopup(googleProvider);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);

  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  const values={
    signUp,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateEmail,
    loginWithGoogle,
  };

  return (

    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>

  )
}

export default AuthContextProvider;