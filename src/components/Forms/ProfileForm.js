import React from 'react'

function ProfileForm() {
  return (
    <div>
        <form>
            <input id='company-name' placeholder='Company Name' type='text'/>
            <input id='industry' placeholder='Industry' type='text'/>
            <input id='company-address' placeholder='Company Address' type='text'/>
            <input id='contact-number' placeholder='Contact Number'type='text'/>
            <input id='email-address' placeholder='Email Address ' type='text'/>
        </form>
    </div>
  )
}

export default ProfileForm