import { async } from '@firebase/util'
import { Alert, Button, TextField } from '@mui/material'

import React, { useRef, useState, useEffect } from 'react'
// import { auth } from '../config/config'
import { useAuth } from "../contexts/AuthContext1"
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

function ForgotPassword() {

    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")


    console.log("password", email)
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError("")
            setMessage("")
            setLoading(true)

            await resetPassword(email)
            setMessage("check your email inbox for further instructions")
        } catch { setError("failed to reset password") }


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


        setLoading(false)
        // setTimeout(() => {
        //     setError("")
        // }, 3000);
    }


    // useEffect(() => {
    //     if (error) {
    //         setTimeout(() => {
    //             setError(false)
    //         }, 10000)
    //     } else { }


    // }, [error])





    return (<div style={{ display: "flex", width: "100vw", maxWidth: "100vw", height: "100vh", backgroundColor: "GrayText", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <div style={{ display: "flex", width: "80vw", maxWidth: "400px", background: " rgba(255, 254, 254, 0.256)", borderRadius: "3vw", height: "70vh", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <h2 style={{ color: "darkBlue", fontWeight: "bolder" }}>Reset Password</h2>
            {loading ? <Stack sx={{ width: '20vw', color: 'grey.500' }} spacing={2}>
                {/* <LinearProgress color="secondary" /> */}
                <LinearProgress color="success" />
                {/* <LinearProgress color="inherit" /> */}
            </Stack> : <div style={{ hight: "20vh" }}></div>}
            {error ? <Alert severity="error" >{error}</Alert> : null}
            {message ? <Alert severity="success" >{message}</Alert> : null}
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
                <br></br>



                <Button disabled={loading} variant="contained" className="w-100" type="submit">
                    Reset Password
                </Button>

            </form>

            <div className="w-100 text-center mt-2">
                Have an account? < Link to="/login">Login</Link>
            </div>
            <div className="w-100 text-center mt-2">
                Need an account? < Link to="/signup">Sign Up</Link>
            </div>
        </div ></div>
    )
}
export default ForgotPassword

