import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);  // Singular 'bestSeller'

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestSeller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products ]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut laboriosam debitis accusantium asperiores? Obcaecati sit vel asperiores, iste assumenda fuga vitae vero alias! Quisquam ipsa deserunt error unde porro.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
               {bestSeller.map((item, index) => (  // Correct variable used here
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;


