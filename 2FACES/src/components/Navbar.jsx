import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import LoginOverlay from './Login';
import { usePrivy } from '@privy-io/react-auth';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);

  const { setShowSearch } = useContext(ShopContext);
  const { login } = usePrivy();

  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-[1fr,auto,1fr] items-center justify-between py-5 font-medium'>
      <ul className='hidden md:flex gap-8 text-sm text-gray-700'>
        <NavLink to='/market' className='flex flex-col items-center group'>
          <p>Market</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden' />
        </NavLink>
        <NavLink to='/designers' className='flex flex-col items-center group'>
          <p>Designers</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center group'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden' />
        </NavLink>
        <NavLink to='/sell-on-2faces' className='flex flex-col items-center group'>
          <p>Sell on 2Faces</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden' />
        </NavLink>
      </ul>

      <Link to={'/'} className=''>
        <img src={assets.faces_logo2} className='w-32' alt="" />
      </Link>

      <div className='flex justify-end items-center gap-8 md:col-start-3'>
        <div className='relative group'>
          <img
            src={assets.profile_icon}
            className='w-6 cursor-pointer'
            alt=""
            onClick={login}
          />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Purchased</p>
              <p className='cursor-pointer hover:text-black'>Log Out</p>
            </div>
          </div>
        </div>
        <img onClick={() => setVisible(true)} src={assets.hamburger_menu} className='w-10 cursor-pointer md:hidden' alt="" />
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer hidden md:block' alt="" />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-8 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.back_icon} alt="" />
            <p>Back</p>
          </div>
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer mt-4 md:hidden' alt="" />
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/designers'>Designers</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/sell'>Sell on 2Faces</NavLink>
        </div>
      </div>

      {showLoginOverlay && <LoginOverlay onClose={() => setShowLoginOverlay(false)} />}
    </div>
  );
};

export default Navbar;
