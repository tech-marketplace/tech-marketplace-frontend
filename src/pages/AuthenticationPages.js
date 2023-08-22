import React from 'react'
import Navbar from '../components/Navbar'
import {LoginForm} from '../components/Forms/AuthenticationForms'
import {SignUpForm} from '../components/Forms/AuthenticationForms'
import '../sassfiles/pages/_authenticationpages.scss'

export const LoginPage=()=> {
  return (
    <>
      <Navbar />
      <div className='login'>
        <LoginForm />
      </div>
    </>
  );
}

export const SignUpPage=()=> {
  return (
    <>
      <Navbar />
      <div className='signup'>
        <SignUpForm />
      </div>
    </>
  );
}