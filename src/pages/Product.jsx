import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img src={assets.star_icon} alt="star" className="w-3.5" key={i} />
            ))}
            <img src={assets.star_dull_icon} alt="dull star" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button   onClick={()=>addToCart(productData._id,size)} className='bg-black  text-white px-8 py-3 text-sm  active:bg-gray-700'>ADD TO CARD</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1' >
            <p>100% Original Product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>

          </div>
        </div>
      </div>
      {/* ------------------Description and review section---------*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>

        </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus error non magni adipisci quae voluptatem, ipsam, debitis harum magnam molestiae! Eos voluptas ullam aliquid, culpa numquam iure qui. Vero?</p>
          <p>A web application (or web app) is application software that is accessed by using a web browser. Web applications are delivered on the World Wide Web to users with an active network connection.[1] The introduction of web applications during the early 2000s allowed for more developer and user flexibility with client interfaces.</p>
         </div>
      </div>
      {/*---display related products------------*/}
    <RelatedProducts category={productData.category}  subCategory={productData.subCategory} /> 


    </div>
  ) : (
    <div className="flex justify-center items-center py-10">Loading...</div>
  );
};

export default Product;