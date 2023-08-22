//login
//signup

import React from 'react'
import {Loginbtn, SignUpbtn } from '../Buttons/AuthenticationButtons'
import { Link } from 'react-router-dom'
import '../../sassfiles/components/Forms/_authenticationforms.scss'

export const LoginForm=()=> {
  return (
    <div>
      <form className='login-form'>
      <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input id='email'placeholder='Enter your email address' type='text'></input>
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password</label>
          <input id='password'placeholder='Enter your password' type='password'></input>
        </div>
      </form>
      <Loginbtn/>
      <Link to='/sign-up'>
        Don't have an account? Sign up
      </Link>
    </div>
  )
}

export const SignUpForm=()=> {
  return (
    <div>
      <form className='login-form'>
        <div className='input-container'>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name'placeholder='Enter your first name' type='text'></input>
        </div>

        <div className='input-container'>
          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name'placeholder='Enter your last name' type='text'></input>
        </div>

        <div className='input-container'>
          <label htmlFor='email'>Email</label>
          <input id='email'placeholder='Enter your email address' type='text'></input>
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Password</label>
          <input id='password'placeholder='Enter your password' type='password'></input>
        </div>
      </form>
      <SignUpbtn/>
      <Link to='/login'>
        Already have an account? Login
      </Link>
    </div>
  )
}