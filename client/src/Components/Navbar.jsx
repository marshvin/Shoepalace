import React, { useState } from 'react';
import { HiUser, HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-semibold">
              ShoePalace
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link to="/store" className="text-white hover:text-gray-300">
                Store
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4 ">
            <Link to="/signup">
              <HiUser className="text-white text-2xl cursor-pointer" />
            </Link>
            <Link to="/cart" className="text-white cursor-pointer">
              <HiShoppingCart className="mr-1 text-2xl" />
            </Link>
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 p-2 focus:outline-none focus:bg-gray-700 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-white block hover:text-gray-300">
                Home
              </Link>
              <Link to="/store" className="text-white block hover:text-gray-300">
                Store
              </Link>
              <Link to="/about" className="text-white block hover:text-gray-300">
                About Us
              </Link>
              <Link to="/contact" className="text-white block hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
