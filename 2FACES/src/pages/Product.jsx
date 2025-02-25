import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {

    products.map((item) =>{
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  },[productId, products])

{/* UI for product pages */}
  return productData? (
    <div className='transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------Product Data----------  */}
      <div className='flex gap-12 sm:gap-12 flex-col'>

        {/* ---------Product Images--------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='mt-20 flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[12%]'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='sm:w-[80%] sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='ml-24 sm:w-[80%]'>
            <img className='w-[80%] h-[100%]' src={image} alt="" />
          </div>
        </div>

        {/* ---------Product information------------ */}
        <div>
          <h1 className='font-medium text-4xl text-center'>{productData.name}</h1>
        </div>

  <div className='flex gap-7'>

<div className='border bg-[#d9d9d9]/30 px-6 py-6 w-full rounded-xl'>
<div className='flex flex-row gap-16 mb-12'>
<div className='bg-[#1d1d1d] p-5 rounded-xl w-52 flex items-center justify-center'>
    <p class=" text-white text-base font-semibold">BUY NOW</p>
    </div>
  <div class="mt-[10px] text-black text-[30px] font-medium">$ {productData.price}</div>
  </div>
  <div class="border border-black"></div>
  <div class="mt-5 text-black text-[32px] font-normal leading-7">1 of 35</div>
  <div class="mt-4 text-black text-base font-normal leading-7">Once you click ”buy now”, the Metamask wallet will appear to confirm the transaction. For completing the transaction you will need to pay gas fee. Gas fee varies depending on the network load.</div>

</div>


{/* ----- Description and Utilities section ------ */}
    <div className='w-full'>
      <div className='flex cursor-pointer'>
        <b className='border px-5 py-3 text-sm'>Description</b>
        <p className='border px-5 py-3 text-sm'>Utilities</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 leading-6'>
        <p>{productData.description}</p>
      </div>

    </div>

</div>

{/* ------- Designer Profile --------- */}

        <div className='flex gap-7'>
          <div className='w-full px-6 py-6 border bg-[#d9d9d9]/90 flex flex-col rounded-md'>
            <div>
              <h1>Mike Mutaki</h1>
              <p className=''>@Mkmutaki</p>
            </div>
            <img className='h-auto w-[70%] mx-auto mb-5' src={assets.designer} alt="" />
          <div className='flex flex-col gap-4'>
            <p>I’m a 3d fashion artist, provide comprehensive 3D digital fashion services to bring your designs to life! I can create high-quality 3D garments, professional patterns, and incorporate logos.</p>
            <button className='ml-auto border border-black rounded-full px-3 py-1 hover:text-white hover:bg-gray-700'>Visit Profile</button>
          </div>
          </div>
          <div className=' w-full'>
            <div className='flex flex-col gap-3'>
            <h1 className='font-medium text-xl'>What's Included</h1>
            <div className='flex flex-row justify-between'>
              <p>Right to transfer & re-sell</p>
              <div className='px-2 py-2 bg-[#d9d9d9]/30 rounded-3xl text-xs'>Digital Token</div>
              </div>
            <div className='flex flex-row justify-between mb-4'>
              <p>Trustless, verifiable ownership</p>
              <div className='px-2 py-2 bg-[#d9d9d9]/30 rounded-3xl text-xs'>Onchain</div>
              </div>
              <div>
                <div className='px-3 py-3 bg-[#d9d9d9]/20 rounded-lg'>
                <div className='flex flex-row justify-between'>
                <h1 className='font-medium mt-[6px] text-lg'>Token details</h1>
                <div className='flex items-center justify-center gap-3'>
                  <img className='h-auto w-10' src={assets.polygon} alt="" />
                  <p className='text-sm'>Chain <br />Polygon </p>
                </div>
                </div>

                <div className='mt-5'>
                  <div className='flex flex-row justify-between mb-2'>
                    <p>Contact Address</p>
                    <p>0xec...7ed</p>
                  </div>
                  <div className='flex flex-row justify-between mb-2'>
                    <p>Token standard</p>
                    <p>ERC721</p>
                  </div>
                  <div className='flex flex-row justify-between mb-2'>
                    <p>Chain</p>
                    <p>Base</p>
                  </div>
                  <div className='flex flex-row justify-between mb-2'>
                    <p>File type</p>
                    <p>3D</p>
                  </div>
                  <div className='flex flex-row justify-between mb-2'>
                    <p>File size</p>
                    <p>34MB</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p>3D license</p>
                    <p>Non-commercial license</p>
                  </div>
                </div>
                </div>
                <div className='flex flex-row-reverse mt-4'>
                  {/* <Link to='/Conditions' className='relative'> */}
                  <p className='font-bold text-xl'>Terms and Conditions</p>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
