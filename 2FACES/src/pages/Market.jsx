import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/title';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';

const Market = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]); 
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {

    if (Category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
        
        case 'high-low':
          setFilterProducts((fpCopy.sort((a, b) => b.price - a.price)));
          break;

          default:
            applyFilter();
            break;
    }

  }


  useEffect(() => {
    applyFilter();
  },[Category, search, showSearch])

  useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kicks'} onChange={toggleCategory} /> Kicks
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'GARMENTS'} />
          {/* Product Sort */}
          <select onChange={(e) =>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="" id="">
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
          }
       </div>
   </div>

</div> 
  )
}

export default Market
