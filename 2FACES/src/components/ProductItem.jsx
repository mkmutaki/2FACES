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
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 tansition ease-in-out' src={image[0]} alt="" />
        <div className='' onClick={() => likeNft()}>
          {like ? (<AiOutlineHeart/>
          ) : (
            <AiFillHeart/>
          )}
          {""} 22
        </div>
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
