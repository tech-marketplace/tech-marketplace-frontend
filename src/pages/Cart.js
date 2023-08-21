import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div>
      <Navbar/>
      <div className='leftSide'>
          <div className='cart-items'>

          </div>
      </div>
      <div className='rightSide'>
          <h1>Cart Total</h1>
      </div>
      <Footer/>           
    </div>
  )
}

export default Cart