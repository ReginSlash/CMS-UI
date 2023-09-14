// import './App.css';
// import './style.css';

import eye from '../../icons/eye.svg';
import eyeOff from '../../icons/eye-off.svg';
import mailicon from '../../icons/mailicon.png';
import React, { useState } from 'react';
import {AiFillEye} from 'react-icons';
import { Link } from 'react-router-dom';

// Hide Password
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Button } from '@mui/base/Button';
import { Input, inputClasses } from '@mui/base/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    const { slots, ...other } = props;
    return (
      <Input
        slots={{
          root: StyledInputRoot,
          input: StyledInputElement,
          ...slots,
        }}
        {...other}
        ref={ref}
      />
    );
  });
  
  CustomInput.propTypes = {
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots: PropTypes.shape({
      input: PropTypes.elementType,
      root: PropTypes.elementType,
      textarea: PropTypes.elementType,
    }),
  };
  


  const blue = {
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
  
  const StyledInputRoot = styled('div')(
    ({ theme }) => `
    width: 90rem;
    height: 80px;
    
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 800;
    border-radius: 10px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    display: flex;
    align-items: center;
    justify-content: center;
  
  
    &.${inputClasses.focused} {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  
  const StyledInputElement = styled('input')(
    ({ theme }) => `
    font-size: 1.8rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    flex-grow: 1;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `,
  );
  
  const IconButton = styled(Button)(
    ({ theme }) => `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: inherit;
    cursor: pointer;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
    `,
  );
  
  const InputAdornment = styled('div')`
    margin: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `;

function ConfirmPassword()
 {



    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
  
  return (

    <div class="container">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>forgot password</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada%3A600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500%2C600%2C700%2C900"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C500%2C600%2C700%2C900"/>
  <link rel="stylesheet" href="./styles/forgot-password-dXo.css"/>


  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/feather/feather.css"/>
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/ti-icons/css/themify-icons.css"/>
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/css/vendor.bundle.base.css"/>
  <link rel="stylesheet" href= "https://demo.bootstrapdash.com/skydash/template/vendors/jquery-toast-plugin/jquery.toast.min.css"/>
</head>




<div class="forgot-password-8Uq">
  <div class="rectangle-1-Tn1">
  </div>
  <p class="copyright-2023-slashtech-all-rights-reserved-CDo">
  Copyright © 2023 Slashtech, All Rights Reserved.
  <br/>
  
  </p>
  <div class="rectangle-7-TfX">
  </div>
  <img class="undrawmypasswordreydq7-1-1-NnV" src="./assets/undrawmypasswordreydq7-1-1-Z9T.png"/>
  <p class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j">
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-0">
    Important Information
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-1">Please </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-2">read</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-3">
     the information below and then
    <br/>
    kindly 
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-4">share</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-5">
     the requested information. 
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-6">
    
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-7">Do </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-8">not</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-9">
     reveal your password to anybody
    <br/>
    Do 
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-10">not</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-u1j-sub-11">
     reuse passwords
    <br/>
    Use Alphanumeric passwords
    <br/>
    Your Login ID. and security answer are required
    <br/>
    Login IDs are case sensitive
    </span>
  </p>
  
  <div class="sign-in-hxV">
    <p class="set-new-password-dbF">Set new password</p>
    <p class="enter-your-new-password-below-and-check-the-hint-while-setting-it-isb">Enter your new password below and check the hint while setting it.</p>
    <div class="auto-group-58ch-ou3">
      <div class="auto-group-bp2q-Xa9">

        {/* INPUT PASSWORD */}
        <div class="rectangle-3-Gnd">
        <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      <CustomInput placeholder="Password"
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
      </div>  

      {/* Confirm PASSWORD */}
        <div class="rectangle-6-SqX">
        <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      <CustomInput placeholder="Confirm Password"
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
    
        </div>
    


      </div>
    </div>



    <div class="auto-group-qad7-KH3">
      <p class="rememberd-your-password-back-to-login-2x9">
        <span class="rememberd-your-password-back-to-login-2x9-sub-0">
        Rememberd your password?
        <br/>
        
        </span>
        <Link to="/Login">
        <span class="rememberd-your-password-back-to-login-2x9-sub-1">Back to </span>
        <span class="rememberd-your-password-back-to-login-2x9-sub-1">login</span>
        </Link>
      </p>
      <div class="auto-group-9xht-FyK">Submit</div>
    </div>
  </div>
  <div class="group-5-WuF">
    <p class="slashtech-solution-TJh">SLASHTECH SOLUTION</p>
    <p class="corporation-AU1">CORPORATION</p>
  </div>
</div>
</div>

  );
}

export default ConfirmPassword;
