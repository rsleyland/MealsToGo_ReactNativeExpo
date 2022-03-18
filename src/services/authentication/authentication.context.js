import { createContext, useState } from "react";
import * as firebase from "firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        }
    });

    const onLogout = () => {
        setUser(null);
        firebase.auth().signOut();
    }

    const onLogin = (email, password) => {
        setIsLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password).then((u)=> {
            setUser(u);
            setIsLoading(false);
        }).catch(err => {
            setError(err);
            setIsLoading(false);
        })
        
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        setTimeout(() => {
            if (password === repeatedPassword) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((u)=> {
                    setUser(u);
                    setIsLoading(false);
                }).catch(err => {
                    setError(err);
                    setIsLoading(false);
                })
            }
            setIsLoading(false);
        }, 1000);
        
    }

    return (
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
    );
};