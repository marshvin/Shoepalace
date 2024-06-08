import React from 'react';

const SpecialOffer = () => {
  return (
    <div className="my-8 bg-blue-900 flex flex-col lg:flex-row items-center lg:items-stretch">
      <div className="mt-8 ml-8 lg:w-1/2 lg:mr-8">
        <h2 className="text-2xl text-white font-bold mb-4">Limited Time Offer</h2>
        <p className="text-white mb-4">
          Enjoy a special discount on selected items! Hurry up and grab your favorite pair of shoes at unbeatable prices.
        </p>
        <p className="text-white mb-4">
          Buy 2 shoes Get 20% OFF
        </p>
      </div>
      <div className="lg:w-1/2">
        <img
          className="w-full h-auto object-cover object-center rounded-lg"
          src="/trainer-sneaker-hi-tops-nike-removebg.png"
          alt="Special Offer"
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
