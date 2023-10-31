import React from 'react'
import Facebook from '../../assets/face.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'


function Footer() {
  return (
    <div className='bg-[#AED7FF] w-full flex justify-between gap-20 px-12 h-12 items-center'>
        <div className='flex justify-between w-[10%]'>
            <img src={Facebook} alt=''/>
            <img src={linkedin} alt=''/>
            <img src={twitter} alt='' /></div>    
        <div>
            <p className='font-semibold'>© 2021 Ron’s. All rights reserved • Terms of Use Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer