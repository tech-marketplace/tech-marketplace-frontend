import React from 'react'
import logoIcon from '../assets/icons/logo.svg'
import '../sassfiles/components/_footer.scss'
import SocialMediaIcons from '../assets/icons/sm-icon-footer.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <img src={logoIcon} alt=''/>
        <p>8th Gear Hub</p>
      </div>
      <div className='footerCentre'>
        <div className='top-row'>
          <div className='email-address'>
              info@8thgearpartners.com
          </div>
          <div className='phone-one'>
            0809 481 8883 
          </div>
          <span className='divider'>&#10072;</span>
          <div className='phone-two'>
            0809 481 8882   
          </div>
        </div>
        <hr className='horizontal-line' />
        <div className='socialmediaicons'>
            <img src={SocialMediaIcons} alt=''/>
        </div>
      </div>
      <div className='footerRight'>
        SIGN UP FOR NEWSLETTER
      </div>
    </div>
  );
}

export default Footer