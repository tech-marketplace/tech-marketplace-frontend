import React from 'react'
import MTNLogo from '../../assets/images/mtnlogo.png'
import LegalMoLogo from '../../assets/images/legalmologo.png'
import TrulanceLogo from '../../assets/images/trulancelogo.png'
import HavenLogo from '../../assets/images/havenlogo.png'
import '../../sassfiles/components/_cards.scss'


const img= HavenLogo
const detail='Tech and Art Instructors for Primary and Secondary Schools';
function VendorCards() {
  return (<>
    <header><h1>Explore the Marketplace</h1></header>
    <div className='vendor-cards'>
      <VendorCard
        img={MTNLogo} 
        detail='Internet Access Service and Devices & Enterprise Business Solutions'
      />
      <VendorCard
        img={LegalMoLogo}
        detail='Legal services when you need it'
      />
      <VendorCard
        img={TrulanceLogo}
        detail='Software/Web Development, Content Creation and Digital Marketing Services'
      />
      <VendorCard
        img={img}
        detail={detail}
      />
    </div>
    </>
  )
}

const VendorCard=({ img, detail })=>{
return(
  <section>
    <img src={img} alt=''/>
    <p>{detail}</p>
  </section>
)
};
export default VendorCards