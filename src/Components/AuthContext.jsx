import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase"
import { GoogleAuthProvider } from "firebase/auth/cordova";
// import React from 'react';
export const AutoContext = createContext(null);
const AuthContext = ({ children }) => {

    // theme control
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);


    })
    

    const handletheme = (e) => {
        if (e.target.checked) {
            setTheme("dark");
            // setLoading(true)
        }
        else {
            setTheme("light")
            // setLoading(true)
        }
    }
    // console.log(theme)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    // login with email password
    const loginWithemail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // log in with popup google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }



    // store user 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // console.log(user)
    // console.log(addData);
    const authInfo = {
        loginWithemail,
        signInWithGoogle,
        user,
        createUser,
        loading,
        handletheme,
        theme,

    }
    // console.log(user)
    return (
        <AutoContext.Provider value={authInfo}>
            {children}
        </AutoContext.Provider>
    );
};

export default AuthContext;