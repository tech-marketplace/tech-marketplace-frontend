import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCards from '../components/Cards/ProductCards'
import ProductPicture from '../assets/images/productheroimage.png'
import Minusbtn from '../components/Buttons/Actionbtns/Minusbtn'
import Plusbtn from '../components/Buttons/Actionbtns/Plusbtn'
import AddToCartbtn from '../components/Buttons/Actionbtns/AddToCartbtn'
import BuyNowbtn from '../components/Buttons/Actionbtns/BuyNowbtn'
import '../sassfiles/pages/_productdetails.scss'

function ProductDetails() {
  return (
    <div>
    <Navbar/>
    <div className='hero'>
      <div className='leftSide'>
        <img src={ProductPicture} alt=''/>
      </div>
      <div className='rightSide'>
       <h1>Ecommerce Application</h1>
        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet .Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            <ul>
                <li>Lorem ipsum dolor sit amet Lorem ipsum</li> 
                <li>Lorem ipsum dolor sit amet Lorem ipsum</li> 
                <li>Lorem ipsum dolor sit amet Lorem ipsum</li> 
                <li>Lorem ipsum dolor sit amet Lorem ipsum</li> 
            </ul>
          <h1>N500,000</h1>
        </p>
        <Minusbtn/> 1 <Plusbtn/>
        <AddToCartbtn/>
        <BuyNowbtn/>
        <Link to='/'>Continue shopping</Link>
      </div>
    </div>
    <div className='product-section'>
      <h1>Related products</h1>
      <ProductCards/>
    </div>
    <Footer/>
    </div>
  )
}

export default ProductDetails