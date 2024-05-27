import React from 'react';

const SingleProduct = ({ product }) => {
  console.log(product);
  const { name, imageURLs, category, price, unit, quantity } = product;


  return (
    <section>

      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900" >

        <img src={imageURLs} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

        <div className="mt-6 mb-2" >
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{category}</span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-base">${price} /{unit}</p>
        <p className='text-base'>Availabe: {quantity} {unit}</p>
      </div>
    </section>
  );
};

export default SingleProduct;