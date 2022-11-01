import { async } from '@firebase/util'
import { Alert, Button, TextField } from '@mui/material'

import React, { useRef, useState, useEffect } from 'react'
// import { auth } from '../config/config'
import { useAuth } from "../contexts/AuthContext1"
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import "./GoogleBtn.css"
function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, googleSignup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    console.log("password", email, password, confirmPassword)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) { return setError("passwords do not match") }
        try {
            setError("")
            setLoading(true)

            await signup(email, password)

        } catch { setError("failed to create an account") }


        // const auth = getAuth();
        // await createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log("createUserWithEmailAndPassword(user)", user);
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log("createUserWithEmailAndPassword(ERROR)", errorCode, errorMessage);
        //         // ..
        //     });
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setLoading(false)
        // setTimeout(() => {
        //     setError("")
        // }, 3000);
    }

    let timerRef = useRef(null)

    useEffect(() => {

        if (error) {
            timerRef.current = setTimeout(() => {
                setError(false)
            }, 10000)
        }
        return () => clearTimeout(timerRef.current)

    }, [error])





    return (<div style={{ display: "flex", width: "100vw", maxWidth: "100vw", height: "100vh", backgroundColor: "rgba(30, 30, 30, 0.387)", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <div style={{ display: "flex", width: "80vw", maxWidth: "400px", background: " rgba(180, 200, 200, 0.450)", borderRadius: "3vw", height: "70vh", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <h2 style={{ color: "rgb(0, 0, 200)", fontWeight: "bolder" }}>Sign Up</h2>
            {loading ? <Stack sx={{ width: '20vw', color: 'grey.500' }} spacing={2}>
                {/* <LinearProgress color="secondary" /> */}
                <LinearProgress color="success" />
                {/* <LinearProgress color="inherit" /> */}
            </Stack> : <div style={{ hight: "20vh" }}></div>}
            {error && <Alert severity="error" >{error}</Alert>}
            {/* {error ? setTimeout(() => {
                setError("")
            }, 5000) : null} */}

            {/* <div>{loadinComponent()}</div> */}

            <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "60vw", height: "60vh" }} >

                <TextField id="email"
                    label="Email"
                    // style={{ width: "200px", margin: "5px" }}
                    type="email"
                    variant="outlined"
                    // inputProps={{ style: {  } }}
                    // ref={emailRef}
                    value={email}
                    placeholder="example..Ganesh123@gmail.com"
                    onChange={(e) => { setEmail(e.target.value) }}
                    InputProps={{ style: { background: "white", overflow: "hidden", width: "70vw", maxWidth: "300px", height: "10vh" } }}
                    required

                >
                </TextField>
                <br />
                <TextField id="password"
                    label="Password"
                    type="password"
                    placeholder='at least 6 characters'
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    InputProps={{ style: { background: "white", overflow: "hidden", width: "70vw", maxWidth: "300px", height: "10vh" } }}
                    required
                >
                </TextField>
                <br />
                <TextField id="password-confirm"
                    label="Password Confirmation"
                    type="password"
                    placeholder='confirm your password'
                    ref={passwordConfirmRef}
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    InputProps={{ style: { background: "white", overflow: "hidden", width: "70vw", maxWidth: "300px", height: "10vh" } }}
                    required
                >
                </TextField>
                <br />
                <Button disabled={loading} variant="contained" className="w-100" type="submit">
                    Sign Up
                </Button>

            </form>
            {/* <Button disabled={loading} onClick={googleSignup} variant="contained" className="w-100" type="submit">
                googleSignup
            </Button> */}
            <button type="button" disabled={loading} onClick={googleSignup} className="login-with-google-btn" >
                Sign in with Google
            </button>
            <div className="w-100 text-center mt-2">
                Already have an account? < Link to="/login">Log In</Link>
            </div></div ></div>
    )
}
export default Signup

