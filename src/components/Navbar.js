import React from 'react'
import logoIcon from '../assets/icons/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import loginButtonConfig from './loginButtonConfig';
import cartIcon from '../assets/icons/carticon.svg';
import searchIcon from '../assets/icons/search.svg';
import '../sassfiles/components/_navbar.scss';
import NavLoginbtn from './Buttons/NavLoginbtn';

function Navbar() {
 const location = useLocation();
 const shouldRenderLoginButton = loginButtonConfig.showonRoutes.includes(location.pathname);

  return (
  <>
    <div className='navbar'>
      <div className='navLeft'>
          <img src={logoIcon} alt=''/>
            <h1>Tech Marketplace</h1>
      </div>
      <div className='navRight'>
        <form id='search-bar'>
          <label htmlFor='search'/>
          <input id='search' placeholder='     Search for products and services' type='text'/>
        </form>
        <img src={searchIcon} alt=''/>
        <Link to='/cart'>
            <img src={cartIcon} alt='Cart Icon'/>
        </Link>
        {shouldRenderLoginButton && (
          <Link to='/login'>
            <NavLoginbtn/>
          </Link>
        )}
      </div>
    </div>
  </>
  );
}

export default Navbar

 


