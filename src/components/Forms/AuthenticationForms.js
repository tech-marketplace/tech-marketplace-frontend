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
        <input id='email'placeholder='Email' type='text'></input>
      </div>
        <div className='input-container'>
          <input id='password'placeholder='Password' type='password'></input>
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
          <input id='first-name'placeholder='First Name' type='text'></input>
        </div>

        <div className='input-container'>
          <input id='last-name'placeholder='Last Name' type='text'></input>
        </div>

        <div className='input-container'>
          <input id='email'placeholder='Email' type='text'></input>
        </div>
        <div className='input-container'>
          <input id='password'placeholder='Password' type='password'></input>
        </div>
      </form>
      <SignUpbtn/>
      <Link to='/login'>
        Already have an account? Login
      </Link>
    </div>
  )
}