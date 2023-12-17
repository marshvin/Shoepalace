import React from 'react';

const Cart = () => {
  return (
    <section className="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-700">
      <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
        <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">Your Cart</h2>
        {/* Item 1 */}
        <div className="mb-10">
          <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
            <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
              <img src="https://i.postimg.cc/tghbJjN7/pexels-web-donut-19090.jpg" alt="" className="object-cover w-full h-full" />
            </div>
            <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
              <a className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline" href="#">
                Shikhar Shoes
              </a>
              <div className="flex flex-wrap">
                <p className="mr-4 text-sm font-medium">
                  <span className="dark:text-gray-400">Color:</span>
                  <span className="ml-2 text-gray-400 dark:text-gray-400">red</span>
                </p>
                <p className="text-sm font-medium dark:text-gray-400">
                  <span>Size:</span>
                  <span className="ml-2 text-gray-400">39</span>
                </p>
              </div>
            </div>
            <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <div className="flex items-center">
                <h2 className="mr-4 font-medium dark:text-gray-400">Qty:</h2>
                <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
                  <button className="py-2 pr-2 border-r border-gray-300 dark:border-gray-600 dark:text-gray-400 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                  </button>
                  <input type="number" className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400" placeholder="1" />
                  <button className="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 hover:text-gray-700 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
              <a className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600" href="#">
                Remove
              </a>
            </div>
            <div className="w-full px-4 xl:w-auto">
              <span className="text-xl font-medium text-blue-500 dark:text-blue-400">
                <span className="text-sm">$</span>
                <span>544.90</span>
              </span>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
          <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
            <img src="https://i.postimg.cc/RZ4Qy1p8/pexels-nathan-j-hilton-4277508.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
            <a className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline" href="#">
              Goldstar Shoes
            </a>
            <div className="flex flex-wrap">
              <p className="mr-4 text-sm font-medium">
                <span className="dark:text-gray-400">Color:</span>
                <span className="ml-2 text-gray-400 dark:text-gray-400">yellow</span>
              </p>
              <p className="text-sm font-medium dark:text-gray-400">
                <span>Size:</span>
                <span className="ml-2 text-gray-400">34</span>
              </p>
            </div>
          </div>
          <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
            <div className="flex items-center">
              <h2 className="mr-4 font-medium dark:text-gray-400">Qty:</h2>
              <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
                <button className="py-2 pr-2 border-r border-gray-300 dark:border-gray-600 dark:text-gray-400 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                  </svg>
                </button>
                <input type="number" className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400" placeholder="1" />
                <button className="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 hover:text-gray-700 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
            <a className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600" href="#">
              Remove
            </a>
          </div>
          <div className="w-full px-4 xl:w-auto">
            <span className="text-xl font-medium text-blue-500 dark:text-blue-400">
              <span className="text-sm">$</span>
              <span>544.90</span>
            </span>
          </div>
        </div>
        {/* Total */}
        <div className="mb-10">
          <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
            <div className="flex justify-between dark:text-gray-400">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold ">$145.79</span>
            </div>
          </div>
          <div className="px-10 py-3 rounded-md">
            <div className="flex justify-between dark:text-gray-400">
              <span className="font-medium">Shipping</span>
              <span className="font-bold ">$100.00</span>
            </div>
          </div>
          <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
            <div className="flex justify-between dark:text-gray-400">
              <span className="font-medium">Tax</span>
              <span className="font-bold ">$900.00</span>
            </div>
          </div>
          <div className="px-10 py-3 rounded-full dark:text-gray-400">
            <div className="flex justify-between">
              <span className="text-base font-bold md:text-xl ">Order Total</span>
              <span className="font-bold ">$680.99</span>
            </div>
          </div>
        </div>
        {/* Checkout Buttons */}
        <div className="text-right">
          <a className="inline-block w-full px-8 py-4 mb-4 mr-6 font-bold text-center uppercase transition duration-200 bg-gray-100 border rounded-md dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 md:mb-0 md:w-auto hover:bg-gray-200 " href="#">
            Continue Shopping
          </a>
          <a className="inline-block w-full px-8 py-4 font-bold text-center text-white uppercase transition duration-200 bg-blue-500 rounded-md md:w-auto hover:bg-blue-600 " href="#">
            Go to Checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cart;
