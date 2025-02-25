import React from 'react';
import { assets } from '../assets/assets';

const LoginOverlay = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative'>
        <button onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
          <img src={assets.cross_icon} alt="Close" />
        </button>
        <h2 className='text-large font-medium mb-4 text-center'>Login or Sign Up</h2>
        <div className='flex justify-center'>
          <img className='max-w-[40%] h-auto' src={assets.faces_logo2} alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          <button className='bg-red-500 text-white py-2 px-4 rounded'>Login with Google</button>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Login with Email</button>
          <button className='bg-yellow-500 text-white py-2 px-4 rounded'>Login with Crypto Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;