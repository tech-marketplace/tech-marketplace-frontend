import React from 'react'
import Navbar from '../components/Navbar'
import {LoginForm} from '../components/Forms/AuthenticationForms'
import {SignUpForm} from '../components/Forms/AuthenticationForms'

export const LoginPage=()=> {
  return (
    <>
      <Navbar/>
      <LoginForm/>
      </>
  );
}

export const SignUpPage=()=> {
  return (
    <>
      <Navbar/>
      <SignUpForm/>
      </>
  );
}