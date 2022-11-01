import React from 'react'
import { AuthProvider } from './contexts/AuthContext1';
import Signup from './Components/Signup';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
// import UpdateProfile from './Components/UpdateProfile';

function Home() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/forgot-password' element={<ForgotPassword />} />
                        {/* <Route path='/update-profile' element={<UpdateProfile />} /> */}
                    </Routes>


                </AuthProvider>
            </Router>
            {/* <Signup></Signup> */}
            {/* <App /> */}
        </div>
    )
}

export default Home