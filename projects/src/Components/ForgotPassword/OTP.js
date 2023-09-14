// import './App.css';
// import './style.css';
import mailicon from '../../icons/mailicon.png';
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
  font-size: 2rem;
  line-height: 1.5;
  background-color: White;
  color: Black;
  border-radius: 8px;
  font-weight: 600;
  padding: 25px 60px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover {
    background-color: #f6f6f6;
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
  width: 100px;
  height: 105px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
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

function OTP() {
  return (

    <div class="container">


<div class="forgot-password-gQ1">
  <div class="rectangle-1-Qau">
  </div>
  <p class="copyright-2023-slashtech-all-rights-reserved-LzM">
  Copyright © 2023 Slashtech, All Rights Reserved.
  <br/>
  
  </p>
  <div class="rectangle-7-QzD">
  </div>
  <p class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm">
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-0">
    Important Information
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-1">Please </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-2">read</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-3">
     the information below and then
    <br/>
    kindly 
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-4">share</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-5">
     the requested information. 
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-6">
    
    <br/>
    
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-7">Do </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-8">not</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-9">
     reveal your password to anybody
    <br/>
    Do 
    </span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-10">not</span>
    <span class="important-information-please-read-the-information-below-and-then-kindly-share-the-requested-information-do-not-reveal-your-password-to-anybody-do-not-reuse-passwords-use-alphanumeric-passwords-your-login-id-and-security-answer-are-required-login-ids-are-case-sensitive-vSm-sub-11">
     reuse passwords
    <br/>
    Use Alphanumeric passwords
    <br/>
    Your Login ID. and security answer are required
    <br/>
    Login IDs are case sensitive
    </span>
  </p>
  <div class="sign-in-mBo">
    <p class="otp-verification-gZf">OTP VERIFICATION</p>
    <div class="auto-group-mnid-NxH">
      <div class="auto-group-gtgy-hDs">
        <div class="otp-r6m">
          <div class="auto-group-yz2r-a2m">
            <span class="auto-group-yz2r-a2m-sub-0">Enter the OTP sent to </span>
            <span>&nbsp;</span>
            <span class="auto-group-yz2r-a2m-sub-1"> </span>
            <span class="auto-group-yz2r-a2m-sub-2"> reg**@gmail.com</span>
          </div>

                 <div class="auto-group-h5ff-d9T">

                 <CustomInput class="rectangle-40-jLu"  placeholder="0" > </CustomInput>


                 <div class="auto-group-puvb-QJd ">
                    
                 {/* <CustomInput class="rectangle-40-jLu" aria-label="Demo input" placeholder="0" > </CustomInput> */}
                 <div class="second-code">
                 <CustomInput class="rectangle-40-jLu" aria-label="Demo input" placeholder="0" > </CustomInput>

              </div>

                 <div class="rectangle-41-3Mb">
                 <CustomInput class="rectangle-40-jLu" aria-label="Demo input" placeholder="0" > </CustomInput>

              </div>
              <p class="sec-kvD">00:120 Sec</p>
            </div>
            <CustomInput class="rectangle-40-jLu" aria-label="Demo input" placeholder="0" > </CustomInput>

          </div>
        </div>
      </div>
    </div>
    <div class="auto-group-t1kf-hiy">
      <p class="dont-receive-code-re-send-pob">
        <span class="dont-receive-code-re-send-pob-sub-0">
        Don’t receive code ?
        <br/>
        
        </span>
        <span class="dont-receive-code-re-send-pob-sub-1">Re-send</span>
      </p>
      <Link to="/ConfirmPassword">      <CustomButton class="auto-group-bxvo-fSq">Continue</CustomButton> </Link>
   
    </div>
  </div>
  <div class="group-5-ury">
    <p class="slashtech-solution-T7o">SLASHTECH SOLUTION</p>
    <p class="corporation-A2D">CORPORATION</p>
  </div>
</div>
</div>

  );
}

export default OTP;
