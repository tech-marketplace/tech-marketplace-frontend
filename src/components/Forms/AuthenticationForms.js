//login
//signup

import React from 'react'
import {Loginbtn, SignUpbtn } from '../Buttons/AuthenticationButtons'
import { Link } from 'react-router-dom'

export const LoginForm=()=> {
  return (
    <div>
      <form>
        <label htmlFor='email'>Email</label>
        <input id='email'placeholder='Enter your email address' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input id='password'placeholder='Enter your password' type='text'></input>
      </form>
      <Link to='/sign-up'>
        Don't have an account? Sign up
      </Link>
      <Loginbtn/>
    </div>
  )
}

export const SignUpForm=()=> {
  return (
    <div>
      <form>
        <label htmlFor='first-name'>First Name</label>
        <input id='first-name'placeholder='Enter your first name' type='text'></input>
        
        <label htmlFor='last-name'>Last Name</label>
        <input id='last-name'placeholder='Enter your last name' type='text'></input>
        
        <label htmlFor='email'>Email</label>
        <input id='email'placeholder='Enter your email address' type='text'></input>
        
        <label htmlFor='password'>Password</label>
        <input id='password'placeholder='Enter your password' type='text'></input>
      </form>
      <Link to='/login'>
        Already have an account? Login
      </Link>
      <SignUpbtn/>
    </div>
  )
}