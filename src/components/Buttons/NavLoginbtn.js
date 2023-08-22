import React from 'react'
import { Link } from 'react-router-dom'

function NavLoginbtn() {
  return (
    <div>
        <Link to='/login'>
            <button className='navlogin'>Login</button>
        </Link>
    </div>
  )
}

export default NavLoginbtn