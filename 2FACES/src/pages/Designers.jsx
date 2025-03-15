import React from 'react'
import { designers } from '../assets/assets'

const Designers = () => {
  return (
    <div>
      <div className='font-medium text-4xl text-center mt-4'>
        <h1>Our Designers</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-12 mx-auto">
        {designers.map((designer, index) => (
          <div key={index} className="cursor-pointer rounded-2xl overflow-hidden shadow-lg relative w-full">
            <img src={designer.image} alt="Artwork" className="w-full h-[400px] object-cover" />
            <div className="absolute top-4 left-4 bg-white bg-opacity-40 backdrop-blur-md rounded-full flex items-center p-2">
              <img
                src={designer.profileImage}
                alt={designer.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-white font-medium">{designer.name}</span>
            </div>
            <button className="absolute bottom-4 left-4 bg-white bg-opacity-30 backdrop-blur-md text-white p-2 rounded-md">
              View Secondary
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designers;