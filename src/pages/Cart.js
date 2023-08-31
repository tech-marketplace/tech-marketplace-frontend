import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCards from '../components/Cards/ProductCards'
import ProceedToCheckoutbtn from '../components/Buttons/Actionbtns/ProceedToCheckoutbtn'
import '../sassfiles/pages/_cart.scss'

function Cart() {
  return (
    <div>
      <Navbar/>
      <div className='leftSide'>
        Cart
        Purchased
          <div className='cart-items'>
            <ProductCards/>
          </div>
      </div>
      <div className='rightSide'>
          <h1>Cart Total</h1>
          <div className='property'>Subtotal:</div>
          <div className='value'>N500,000</div>
          <div className='property'>Shipping:</div>
          <div className='value'>Pick up: You can either come to the store or send a rider for pickup.</div>
          <div className='property'>Total:</div>
          <div className='value'>N500,000</div>
          <ProceedToCheckoutbtn/>
      </div>
      <Footer/>           
    </div>
  )
}

export default Cart