import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-96 bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/jakob-owens-JzJSybPFb3s-unsplash.jpg)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-4xl mx-auto p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Shoe Palace</h1>
            <p className="text-lg font-bold text-gray-300 mb-8">
            Explore our curated collection of sneakers that blend cutting-edge design with timeless comfort. Whether you're chasing trends or seeking classics, our handpicked range ensures you find the perfect fit for every occasion. 
            </p>
            <Link to="/store">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={`${process.env.PUBLIC_URL}/nike.png`} // Replace with your image URL
              alt="Shoe Palace Image"
              className="w-full rounded-lg opacity-75"
              style={{ filter: 'brightness(50%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
