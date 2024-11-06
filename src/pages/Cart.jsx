import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      const itemSizes = cartItems[itemId];
      for (const size in itemSizes) {
        if (itemSizes[size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: itemSizes[size]
          });
        }
      }
    }
    setCartData(tempData); // Update state with the generated cart data
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            if (!productData) return null; // Check for product data validity

            return (
              <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <p className='text-xs sm:text-sm'>Size: {item.size}</p>
                    <p className='text-xs sm:text-sm'>Quantity: {item.quantity}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input 
                  type="number" 
                  min={1} 
                  defaultValue={item.quantity} 
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value > 0) updateQuantity(item._id, item.size, value);
                  }} 
                  className='border max-w-10 sm:max-w-20 py-1' 
                />
                <img 
                  onClick={() => updateQuantity(item._id, item.size, 0)} 
                  className='w-4 mr-4 sm:w-5 cursor-pointer' 
                  src={assets.bin_icon} 
                  alt="Remove item" 
                />
              </div>
            );
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button 
              onClick={() => navigate('/placeorder')} 
              className='bg-black text-white text-sm my-8 px-8 py-3' 
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
