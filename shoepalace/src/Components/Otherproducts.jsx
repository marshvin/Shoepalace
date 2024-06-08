import React from 'react';

const Otherproducts = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:mr-8 mb-8 md:mb-0">
          <h1 className="text-2xl font-bold mb-4">This page is under construction</h1>
          <a href="/" className="text-blue-500 hover:underline flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Go Back
          </a>
        </div>
        <img
          src="/undercons.jpg"
          alt="Under construction"
          className="w-84 h-64 object-cover"
        />
      </div>
    </div>
  );
}

export default Otherproducts;
