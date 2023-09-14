// import './App.css';
// import './style.css';
import mailicon from '../../icons/mailicon.png';
import '../../Components/ForgotPassword/ForgotPassword.css'
import React from 'react';
import { Link } from 'react-router-dom';


// input
import { Input } from '@mui/base/Input';


// button

import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(Button)`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.8rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  color: white;
  border-radius: 8px;
  font-weight: 600;
  padding: 30px 70px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// input box

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

const inputblue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 570px;
  height: 8rem;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  // border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${inputblue[400]};
  }

  &:focus {
    border-color: ${inputblue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? inputblue[500] : inputblue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

function FGPassword() {
  return (

    <div class="container">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>forgot password</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500%2C600%2C700%2C900"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C500%2C600%2C700%2C900"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada%3A600"/>
 
</head>
<div class="forgot-password-cJM">
  <div class="rectangle-1-x7K">
  </div>
  <p class="copyright-2023-slashtech-all-rights-reserved-HQV">
  Copyright © 2023 Slashtech, All Rights Reserved.
  <br/>
  
  </p>
  <div class="rectangle-7-k3B">
  </div>
  <p class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF">
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-0">
    Important Information
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-1">Please </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-2">read</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-3">
     the information below and then
    <br/>
    kindly 
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-4">share</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-5">
     the requested information. 
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-6">
    
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-7">Do </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-8">not</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-9">
     reveal your password to anybody
    <br/>
    Do 
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-10">not</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-euF-sub-11">
     reuse passwords
    <br/>
    Use Alphanumeric passwords
    <br/>
    Your Login ID. and security answer are required
    <br/>
    Login IDs are case sensitive
    </span>
  </p>
  <div class="sign-in-ZVj">
    <div class="auto-group-p7xf-VeH">
      <div class="auto-group-jous-28R">
        <CustomInput class="rectangle-3-AkR" aria-label="Demo input" placeholder="Please fill in your email address" > </CustomInput>
       
        <img class="image-1-4au" src={mailicon}/>


        {/* <CustomInput class="please-fill-in-your-email-address-PdB">Please fill in your email address</CustomInput> */}
      </div>
    </div>
    <div class="auto-group-pha9-5W1">
    </div>
    <div class="auto-group-fdp7-cF3">
      <p class="rememberd-your-password-back-to-login-iYy">
        <span class="remembered-your-password-back-to-login-iYy-sub-0">
        Remembered your password?
        <br/>
        
        </span>
        <span class="remembered-your-password-back-to-login-iYy-sub-1">Back to </span>
        <span class="remembered-your-password-back-to-login-iYy-sub-2">login</span>
      </p>

      <Stack spacing={2} direction="row">
      <div >

     <Link to="/OTP"> <CustomButton slots={{ root: 'span' }} >Continue</CustomButton></Link>
    
      </div>

    </Stack>
    </div>
    <p class="dont-wory-we-can-help-XHT">Dont wory. We can help.</p>
    <p class="forgot-password-DRB">
    Forgot 
    <br/>
    password?
    </p>
  </div>
  <div class="group-5-vKb">
    <p class="slashtech-solution-rU9">Infinity Eight Trading And Marketing</p>
    <p class="corporation-Mvh">CORPORATION</p>
  </div>
</div>
</div>
  );
}

export default FGPassword;
