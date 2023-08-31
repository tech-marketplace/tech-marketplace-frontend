import React from 'react'
import logoIcon from '../assets/icons/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import loginButtonConfig from './loginButtonConfig';
import homeIconConfig from './homeIcon';
import profileIconConfig from './homeIcon';
import cartIcon from '../assets/icons/carticon.svg';
import HomeIcon from '../assets/icons/icon-home.svg'
import ProfileIcon from '../assets/icons/icon-person.svg'
import searchIcon from '../assets/icons/search.svg';
import '../sassfiles/components/_navbar.scss';
import NavLoginbtn from './Buttons/NavLoginbtn';

function Navbar() {
 const location = useLocation();
 const shouldRenderLoginButton = loginButtonConfig.showonRoutes.includes(location.pathname);
 const shouldRenderHomeIcon = homeIconConfig.showonRoutes.includes(location.pathname);
 const shouldRenderProfileIcon = profileIconConfig.showonRoutes.includes(location.pathname);

  return (
  <>
    <div className='navbar'>
      <div className='navLeft'>
          <img src={logoIcon} alt=''/>
            <h1>Tech Marketplace</h1>
      </div>
      <div className='navRight'>
        {shouldRenderHomeIcon && (
          <Link to='/'>
            <img src={HomeIcon} alt=''/>
          </Link>
        )}
        {shouldRenderProfileIcon && (
          <Link to='/profile'>
            <img src={ProfileIcon} alt=''/>
          </Link>
        )}
        <form id='search-bar'>
          <input id='search' placeholder='  Search for products and services' type='text'/>
        </form>
        <img src={searchIcon} alt='' className='search-icon'/>
        <Link to='/cart'>
            <img src={cartIcon} alt='Cart Icon' className='cart-icon'/>
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

 


