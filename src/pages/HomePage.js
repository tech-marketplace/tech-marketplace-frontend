import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/images/hero-image.png'
import Footer from '../components/Footer'
import VendorCards from '../components/Cards/VendorCards'
import ProductCards from '../components/Cards/ProductCards'
import { Link } from 'react-router-dom'
import BuyNowbtn from '../components/Buttons/Actionbtns/BuyNowbtn'
import '../sassfiles/pages/_home.scss'
import Sellbtn from '../components/Buttons/Actionbtns/Sellbtn'
import '../sassfiles/pages/_home.scss'
import '../sassfiles/components/_buttons.scss'
import '../sassfiles/components/_cards.scss'
import MTNbtn from '../components/Buttons/Vendorbtns.js/MTNbtn'
import LegalMobtn from '../components/Buttons/Vendorbtns.js/LegalMobtn'
import Trulancebtn from '../components/Buttons/Vendorbtns.js/Trulancebtn'
import Havenbtn from '../components/Buttons/Vendorbtns.js/Havenbtn'
import ImpactCards from '../components/Cards/ImpactCards'
import WhyChooseUsCards from '../components/Cards/WhyChooseUsCards'

function HomePage() {
  return (
    <>
      <Navbar/>
        <div className='hero'>
          <div className='heroLeftside'>
            <h1>Accelerate your Business Transformation with Portfolio Tech Solutions</h1>
            <p>We offer a comprehensive suite of Tech Solutions tailored to drive seamless digital transformation in your business</p>
            <div className='buttons-container'>
                <Link to='/product-details'>
                  <BuyNowbtn/>
                </Link>
                <Link to='/request-form'>
                  <Sellbtn/>
                </Link>
            </div>
          </div>
          <div className='heroRightside'>
            <img src={Hero} alt='hero'/>
          </div>
        </div>
        <div className='vendor-section'>
          <VendorCards/>
        </div>
        <div className='product-section'>
          <div className='vendor-buttons'>
            <MTNbtn/> 
            <LegalMobtn/>
            <Trulancebtn/>
            <Havenbtn/>
          </div>
            <div className='product-cards'>
                 <ProductCards/>
            </div>
        </div>  
        <div className='card'>
          <header><h1>Why Choose Us</h1></header>
          <WhyChooseUsCards/>
        </div>
        <div className='impact-section'>
          <ImpactCards/>        
        </div>      
      <Footer/>
    </>
  )
}

export default HomePage