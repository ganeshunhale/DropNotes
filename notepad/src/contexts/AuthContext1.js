import React, { useContext, useEffect, useState } from 'react'
// import { auth } from "../config/config"
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ({ children }) => {
    const [currenetUserState, setCurrenetUser] = useState("")
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const user = auth.currentUser;
    const currentUserEmail = user ? user?.email : null
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const signup = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("signup func")
                // Signed in 
                const user = userCredential.user;
                navigate("/")
                console.log("createUserWithEmailAndPassword(user)", user.email);
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("createUserWithEmailAndPassword(ERROR)", errorCode, errorMessage);
                // ..
            });
        // return  createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignup = async () => {
        return await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log("credential", credential);
                navigate("/")
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        // return  createUserWithEmailAndPassword(auth, email, password)
    }
    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("login successfully")
                navigate("/");
                // Signed in 
                const user = userCredential.user;
                console.log("login(user)", user.email);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("failed to login(ERROR)", errorCode, errorMessage);
                // ..
            });
    }
    const logOutFromFirbaseUser = async () => {
        return await signOut(auth).then(() => navigate("/login"))

    }
    const resetPassword = async (email) => {
        return await sendPasswordResetEmail(auth, email).then(() => (
            alert("check your email inbox for further instructions"),
            navigate("/login"))).catch(() => alert("fAILE TO UPDATE PASSWORD "))

    }
    const updateEmail = async (email) => {
        return await updateEmail(auth?.currentUser, email)

    }
    const updatePassword = async (password) => {
        return await updatePassword(auth?.currentUser, password)

    }
    const currenetUserIdFunc = () => {
        return currenetUserState

    }


    useEffect(() => {
        const unsubcriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log("uid", uid);
                setCurrenetUser(user.uid)
                setLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
                navigate("/signup")
                setLoading(false)
            }

        })

        return unsubcriber

    }, [auth])

    console.log("currenetUserState", currenetUserState)
    // onAuthStateChanged(auth, (user) => {
    //     setCurrenetUser(user)

    //     setLoading(false)
    // })
    const value = { signup, login, logOutFromFirbaseUser, currentUserEmail, resetPassword, updateEmail, updatePassword, currenetUserState, googleSignup }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

