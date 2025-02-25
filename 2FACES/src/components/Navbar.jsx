import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import LoginOverlay from './Login';

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);

    const {setShowSearch} = useContext(ShopContext);
    
  return (
    <div className='w-full grid grid-cols-[1fr,auto,1fr] items-center justify-between py-5 font-medium'>
      
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
        
        <NavLink to='/market' className='flex flex-col items-center'>
            <p>Market</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/collections' className='flex flex-col items-center'>
            <p>Collections</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/designers' className='flex flex-col items-center'>
            <p>Designers</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

      </ul>

      <Link to={'/'}>
        <img src={assets.faces_logo2} className='w-32 mx-auto' alt="" />
        </Link>

      <div className='flex flex-row-reverse item-center gap-8'>

        <div className='group relative'>
           <img 
            src={assets.profile_icon} 
            className='w-6 cursor-pointer' 
            alt="" 
            onClick={() => setShowLoginOverlay(true)} 
          />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Purchased</p>
                    <p className='cursor-pointer hover:text-black'>Log Out</p>
                </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.shopping_icon} className='w-5 min-w-5' alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer' alt="" />
      </div>
      
      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-8 cursor-pointer'>
                <img className='h-4 rotate-180' src={assets.back_icon} alt="" />
                <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>

      {showLoginOverlay && <LoginOverlay onClose={() => setShowLoginOverlay(false)} />}
    </div>
  )
}

export default Navbar
