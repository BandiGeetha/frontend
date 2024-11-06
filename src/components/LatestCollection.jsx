import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import { products } from '../assets/assets';
import ProductItem from './ProductItem';  // Import ProductItem


const LatestCollection = () => {
    const { products } = useContext(ShopContext);  // Correct variable name
    const [latestProducts, setLatestProducts] = useState([]);  // Fixed camelCase

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));  // Correct the state setter function name
    }, [products]);  // Adding 'products' as a dependency to useEffect

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab exercitationem illum laborum minus reiciendis possimus vero quibusdam harum fugit delectus, animi rerum nulla et neque inventore accusamus cum velit iste.
        </p>
      </div>

      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection;
