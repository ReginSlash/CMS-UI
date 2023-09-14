// import './App.css';
// import './style.css';
import '../../Components/login/login.css'
import React from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';



function login(){

 
  return (



<div className="container">
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>login form without credentials</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada%3A500"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C500%2C800"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A400%2C500%2C800"/>
  <link rel="stylesheet" href="./styles/login-form-without-credentials.css"/>

  {/* Skydash CSS import */}
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/feather/feather.css"/>
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/ti-icons/css/themify-icons.css"/>
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/css/vendor.bundle.base.css"/>
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/jquery-toast-plugin/jquery.toast.min.css"/>


</head>

<div className="login-form-without-credentials-jWZ">
  <div className="rectangle-1-rLH">
  </div>
  <p className="slashtech-solution-NpR">SLASHTECH SOLUTION</p>
  <p className="corporation-Tqs">CORPORATION</p>
  <div className="frame-1-mbf">

  <div className="auto-group-imnr-Cgy">
      <span className="auto-group-imnr-Cgy-sub-0">Welcome back, </span>
      <span className="auto-group-imnr-Cgy-sub-1"> </span>
      <span className="auto-group-imnr-Cgy-sub-2">Regin</span>
    </div>
    <div className="auto-group-vebk-NNV">
      <div className="login-VT7">
        
        <p className="email-address-3Dj">Email address</p>
        <input className='inputext usernameicon' type="text" name="username" placeholder="Username"/>
        <br/>
        <p className="password-8Y1">Password</p>
       <input  className='inputext passwordicon' type="password" name="Password" placeholder="Password"/>
        <Link to="/ForgotPassword" className="forgot-password-oGm">Forgot Password?</Link>
        <Link to="/Dashboard"><button className='LoginBtn' >Login</button></Link>

        

       
      

    </div>
    </div>
     <div className="title-9ms">
          <div className="auto-group-qf1s-qeh">
          <p className="infinity-9vH">INFINITY </p>
          <p className="eight-TRB">Eight</p>
          </div>
      <div className="line-1-NY9">
      </div>
      <p className="cms-iM7">CMS</p>
    </div>
    <div className="frame-3-Frq">English (UK)</div>
  </div>
  <p className="copyright-2023-slashtech-all-rights-reserved-wUm">
  Copyright © 2023 Slashtech, All Rights Reserved.
  <br/>
  
  </p>
</div>


</div>

  );
  }

export default login;