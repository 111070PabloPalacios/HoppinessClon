import React, { createContext, useState} from 'react';
import { loginRequest } from './authentication.service';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState();
    const [user,setUser] = useState();
    const [error, setError] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState();

    //Autentica el usuario y si existe, carga una sesion existente en vez de
    //crear una nueva

    firebase.auth().onAuthStateChanged((usr) => {
        if(usr){
            setUser(usr);
            setIsLoading(false);
        }
        else{
            setIsLoading(false);
        }
    });

    const onLogin = (email,password) => {
        setIsLoading(true);
        loginRequest(email, password)
        .then((u) => {
            setUser(u);
            console.log(isAuthenticated);
            setIsLoading(false);
        })
        .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
            console.log(e.message);
        });
    } 

    const onRegister = (email,password, repeatedPassword) => {
        setIsLoading(true);
        if(password !== repeatedPassword){
            setError("Error: las contraseñas no coinciden");
            console.log(error);
            return;
        }
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((u) => {
            setUser(u);
        })
        .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
            console.log(e.message);
        })
    }

    const onLogout = () => {
        firebase
        .auth()
        .signOut()
        .then(() => {
            setUser(null);
            setError(null);
        });
    }

    return(
        <AuthenticationContext.Provider
        value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}