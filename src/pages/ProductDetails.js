import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCards from '../components/Cards/ProductCards'

function ProductDetails() {
  return (
    <div>
      
    <Navbar/>
    <div className='hero'>
      <div className='leftSide'>
        <img alt=''/>
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
        </p>
      </div>
    </div>
    <div className='related-products'>
      <h1>Related products</h1>
      <ProductCards/>
    </div>
    <Footer/>
    </div>
  )
}

export default ProductDetails