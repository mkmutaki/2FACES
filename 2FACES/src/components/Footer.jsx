import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img className='mb-5 w-32' src={assets.faces_logo2} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>2FACES</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
         <p className='text-xl font-medium mb-5'>Get in touch</p>  
         <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-509-862-0089</li>
            <li>contact@2faces.com</li>
            </ul> 
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ 2FACES.com - All Rights reserved</p>
      </div>

    </div>
  )
}

export default Footer
