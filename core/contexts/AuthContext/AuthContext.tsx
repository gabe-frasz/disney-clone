import { auth } from "@core/services";
import { Account, AuthContextProps, AuthContextValue } from "@core/types";
import { FirebaseError } from "firebase/app";
import {
  AuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext({} as AuthContextValue);

export const FirebaseAuthProvider = ({ children }: AuthContextProps) => {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  // auth subscription
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAccount(null);
        setLoading(false);
        return;
      }

      const { uid, displayName, email, photoURL, delete: signOut } = user;

      setAccount({
        id: uid,
        name: displayName,
        email,
        avatar: photoURL,
        signOut,
      });
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function signIn(provider: AuthProvider) {
    try {
      //
      const {
        user: { uid },
      } = await signInWithPopup(auth, provider);
      setCookie(null, "disney_clone_account_id", uid);
      toast.success("User logged in!");
      //
    } catch (error) {
      //
      const err = error as FirebaseError;
      toast.error(err.message);
      //
    }
  }

  async function signUserOut() {
    return await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ account, loading, signIn, signUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};
