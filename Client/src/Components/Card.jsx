import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ShoeCard = ({ name, image, price, rating }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (index) => {
    setSelectedRating(index + 1);
  };

  return (
    <div className="flex-shrink-0 max-w-xs mx-2 my-4 lg:my-0 lg:mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">${price}</p>
        <div className="flex items-center mb-2">
          <AiOutlineShoppingCart className="mr-1" />
          <span className="text-gray-600">Add to Cart</span>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`text-yellow-500 cursor-pointer ${
                index <= (selectedRating || rating) ? 'text-yellow-500' : 'text-gray-400'
              }`}
              onClick={() => handleStarClick(index)}
            >
              ★
            </span>
          ))}
          <span className="text-yellow-500 ml-1">{selectedRating || rating}</span>
        </div>
      </div>
    </div>
  );
};
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Comfort X Sneaker',
      image: 'https://example.com/sneaker1.jpg',
      price: 89.99,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Running Pro 2000',
      image: 'https://example.com/sneaker2.jpg',
      price: 99.99,
      rating: 4.8,
    },
    {
      id: 3,
      name: 'StreetStyle Elite',
      image: 'https://example.com/sneaker3.jpg',
      price: 79.99,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Adventure Trail Shoe',
      image: 'https://example.com/sneaker4.jpg',
      price: 109.99,
      rating: 4.7,
    },
    {
        id: 5,
        name: 'Comfort X Sneaker',
        image: 'https://example.com/sneaker1.jpg',
        price: 89.99,
        rating: 4.5,
      },
      {
        id: 6,
        name: 'Running Pro 2000',
        image: 'https://example.com/sneaker2.jpg',
        price: 99.99,
        rating: 4.8,
      },
      {
        id: 7,
        name: 'StreetStyle Elite',
        image: 'https://example.com/sneaker3.jpg',
        price: 79.99,
        rating: 4.2,
      },
      {
        id: 8,
        name: 'Adventure Trail Shoe',
        image: 'https://example.com/sneaker4.jpg',
        price: 109.99,
        rating: 4.7,
      },
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className=" flex flex-wrap justify-center ">
        {products.map((product) => (
          <ShoeCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};


export default FeaturedProducts;
