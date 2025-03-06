import React, {useContext, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai' 

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

    const [like, setLike] = useState(true);
    const likeNft = ()=> { if(!like){
      setLike(true);
    } else{
      setLike(false);
    }
  }

  return (
    <div className='product-item relative'>
      <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='relative'>
          <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
          <div className='absolute bottom-0 left-0 flex flex-row gap-3 z-10 bg-white p-2' onClick={(event) => { event.stopPropagation(); event.preventDefault(); likeNft(); }}>
            {like ? (<AiOutlineHeart/>
            ) : (
              <AiFillHeart/>
            )}
          </div>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>
    </div>
  )
}

export default ProductItem
