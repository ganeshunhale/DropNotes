import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Components/Signup';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext1';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>

    {/* <AuthProvider> */}

    {/* <App /> */}
    <Home></Home>
    {/* <Signup></Signup> */}

    {/* </AuthProvider> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
