import React, { createContext, ReactNode, useEffect, useState } from "react";

import { auth } from '../services/firebase'

type AuthFirebaseContextType = {
  userId: string
  setUserId: (arg: string) => void 
  SignUpWithEmail: (email: string, password: string) => Promise<void> 
  LoginWithEmailAuth: (email: string, password: string) => Promise<void> 
  logged: string
  setLogged: (arg: boolean) => void 
}
interface AuthFirebaseProviderProps{
  children: ReactNode
}
export const AuthFirebaseContext = createContext({} as AuthFirebaseContextType)

export function AuthFirebaseProvider({children} : AuthFirebaseProviderProps){
  const [ userId, setUserId ] = useState('')
  const [ logged, setLogged ] = useState(false)

  async function SignUpWithEmail(email: string, password: string){
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
    });  
  }
  async function LoginWithEmailAuth(email: string, password: string){
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
    });  
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { uid } = user
        setUserId(uid)
      }
    })
    return () => {
      unsubscribe()
    }
  },[])

  return (
    <AuthFirebaseContext.Provider value={{
      userId,
      setUserId,
      SignUpWithEmail,
      LoginWithEmailAuth,
      logged,
      setLogged
    }}>
      {children}
    </AuthFirebaseContext.Provider>
  )
}
