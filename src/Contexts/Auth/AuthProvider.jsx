import React from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../firebase.config";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sendPasswordResetLink = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateUserProfile = (name, photo) => {
    // setIsLoadingDone(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginUser = (email, password) => {
    setIsLoadingDone(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setIsLoadingDone(false);
    return signOut(auth);
  };
  const googleProvider = new GoogleAuthProvider();
  const loginUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("currently we have the user", currentUser);
      setUser(currentUser);
      setIsLoadingDone(true);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    loginUser,
    logOutUser,
    isLoadingDone,
    loginUserWithGoogle,
    updateUserProfile,
    sendPasswordResetLink
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
