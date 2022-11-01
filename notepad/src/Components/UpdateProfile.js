// import { async } from '@firebase/util'
// import { Alert, Button, TextField } from '@mui/material'

// import React, { useRef, useState, useEffect } from 'react'
// // import { auth } from '../config/config'
// import { useAuth } from "../contexts/AuthContext1"
// import Stack from '@mui/material/Stack';
// import LinearProgress from '@mui/material/LinearProgress';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from 'react-router-dom';

// function UpdateProfile() {
//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const passwordConfirmRef = useRef()
//     const { currentUserEmail, updateEmail, updatePassword } = useAuth()
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const navigate = useNavigate()
//     console.log("password", email, password, confirmPassword)
//     //

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (password !== confirmPassword) { return setError("passwords do not match") }
//         const promises = []
//         setError("")
//         setLoading(true)
//         if (email !== currentUserEmail) {
//             promises.push(updateEmail(email))
//         }
//         if (password) {
//             promises.push(updatePassword(password))
//         }

//         Promise.all(promises).then(() => {
//             navigate("/")
//         }).catch(() => {
//             setError("failed to update profile")
//         }).finally(() => { setLoading(false) })
//         try {
//             setError("")
//             setLoading(true)

//             // await signup(email, password)

//         } catch { setError("failed to create an account") }


//         // const auth = getAuth();
//         // await createUserWithEmailAndPassword(auth, email, password)
//         //     .then((userCredential) => {
//         //         // Signed in
//         //         const user = userCredential.user;
//         //         console.log("createUserWithEmailAndPassword(user)", user);
//         //         // ...
//         //     })
//         //     .catch((error) => {
//         //         const errorCode = error.code;
//         //         const errorMessage = error.message;
//         //         console.log("createUserWithEmailAndPassword(ERROR)", errorCode, errorMessage);
//         //         // ..
//         //     });
//         setEmail("")
//         setPassword("")
//         setConfirmPassword("")
//         setLoading(false)
//         // setTimeout(() => {
//         //     setError("")
//         // }, 3000);
//     }

//     useEffect(() => {
//         if (error) {
//             setTimeout(() => {
//                 setError(false)
//             }, 10000)
//         }


//     }, [error])





//     return (<div style={{ display: "flex", width: "100vw", maxWidth: "100vw", height: "100vh", backgroundColor: "red", alignItems: "center", justifyContent: "center", flex: 1 }}>
//         <div style={{ display: "flex", width: "35vw", background: " rgba(255, 254, 254, 0.256)", borderRadius: "3vw", height: "70vh", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
//             <h2 style={{ color: "darkBlue", fontWeight: "bolder" }}>Update Profile</h2>
//             {loading ? <Stack sx={{ width: '20vw', color: 'grey.500' }} spacing={2}>
//                 {/* <LinearProgress color="secondary" /> */}
//                 <LinearProgress color="success" />
//                 {/* <LinearProgress color="inherit" /> */}
//             </Stack> : <div style={{ hight: "20vh" }}></div>}
//             {error && <Alert severity="error" >{error}</Alert>}
//             {/* {error ? setTimeout(() => {
//                 setError("")
//             }, 5000) : null} */}

//             {/* <div>{loadinComponent()}</div> */}

//             <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "60vw", height: "60vh" }} >

//                 <TextField id="email"
//                     label="Email"
//                     // style={{ width: "200px", margin: "5px" }}
//                     type="email"
//                     variant="outlined"
//                     // inputProps={{ style: {  } }}
//                     // ref={emailRef}
//                     value={email === "" ? currentUserEmail : email}
//                     // defaultValue={currentUserEmail}

//                     placeholder={`${currentUserEmail}`}
//                     onChange={(e) => { setEmail(e.target.value) }}
//                     InputProps={{ style: { background: "white", overflow: "hidden", width: "30vw", height: "10vh" } }}


//                 >
//                 </TextField>
//                 <br />
//                 <TextField id="password"
//                     label="Password"
//                     type="password"
//                     placeholder='leave blank to keep the same'
//                     ref={passwordRef}
//                     value={password}
//                     onChange={(e) => { setPassword(e.target.value) }}
//                     InputProps={{ style: { background: "white", overflow: "hidden", width: "30vw", height: "10vh" } }}

//                 >
//                 </TextField>
//                 <br />
//                 <TextField id="password-confirm"
//                     label="Password Confirmation"
//                     type="password"
//                     placeholder='leave blank to keep the same'
//                     ref={passwordConfirmRef}
//                     value={confirmPassword}
//                     onChange={(e) => { setConfirmPassword(e.target.value) }}
//                     InputProps={{ style: { background: "white", overflow: "hidden", width: "30vw", height: "10vh" } }}

//                 >
//                 </TextField>
//                 <br />
//                 <Button disabled={loading} variant="contained" className="w-100" type="submit">
//                     Update
//                 </Button>

//             </form>

//             <div className="w-100 text-center mt-2">
//                 Already have an account? < Link to="/">cancel</Link>
//             </div></div ></div>
//     )
// }
// export default UpdateProfile

