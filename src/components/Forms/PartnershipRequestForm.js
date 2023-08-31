import React from 'react'

function PartnershipRequestForm() {
  return (
  <>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ipsum non ex aliquam tinntum bibendum, dolor ex faucibus justo, non blandit orci felis vel justo. In nec ante a turpis condimentum hendrerit. Fusce non pellentesque urna, quis posuere ante. Sed et massa risus. Integer euismod, urna quis viverra acr nisi tristique dolor, ac feugiat dolor sapien ut metus. Nullam at feugiat nulla.
    Fill the form below:
    </div>
    <form>
        <input id='company-name' placeholder='Company Name' type='text'/>
        <input id='industry' placeholder='Industry' type='text'/>
        <input id='company-address' placeholder='Company Address' type='text'/>
        <input id='contact-number' placeholder='Contact Number'type='text'/>
        <input id='email-address' placeholder='Email Address ' type='text'/>
        <input id='product-name' placeholder='Product Name' type='text'/>
        <input id='product-type' placeholder='Product Type' type='text'/>
        <input id='price' placeholder='Price' type='text'/>
    </form> 
    </>     
  )
}

export default PartnershipRequestForm