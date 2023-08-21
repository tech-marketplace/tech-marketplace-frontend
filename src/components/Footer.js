import React from 'react'
import logoIcon from '../assets/icons/logo.svg'
import '../sassfiles/components/_footer.scss'

function Footer() {
  return (<>
    <div className='footer'>
       <div className='footerLeft'>
        <img src={logoIcon} alt=''/>
        <p>8th Gear Hub</p>
      </div>
      <div className='footerCentre'>
      <p>
          info@8thgearpartners.com
             0809 481 8883 <span>&#10072;</span>0809 481 8882   
      </p>
      {/* facebook instagram linkedin twitter email */}
      </div>
      <div className='footerRight'>
      SIGN UP FOR NEWSLETTER
      </div>
    </div>
    </>
  );
}

export default Footer