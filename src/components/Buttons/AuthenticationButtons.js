import React from 'react'
import { Link } from 'react-router-dom';
import '../../sassfiles/components/_buttons.scss'

export const Loginbtn=()=> {
  return (
    <div>
      <Link to='/login'>
      <button className="LoginBtn">Login</button>
      </Link>
    </div>
  );
}

export const SignUpbtn=()=> {
  return (
    <div>
      <Link to='/login'>
      <button className="SignUpBtn">Sign Up</button>
      </Link>
    </div>
  );
}