import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-wide text-indigo-600 uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl">Welcome to ShoePalace</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            At ShoePalace, we believe in the power of quality footwear. Our mission is to provide our customers with the best selection of shoes, combining style, comfort, and durability.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img className="w-full rounded-lg shadow-lg" src="https://media.sciencephoto.com/f0/08/41/02/f0084102-800px-wm.jpg" alt="Storefront" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2021, ShoePalace started with a simple idea: to make it easier for people to find the perfect pair of shoes. Since then, we have grown into a leading retailer, offering a wide range of styles from top brands. We are committed to providing exceptional customer service and a seamless shopping experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
              <ul className="mt-4 text-lg text-gray-500 list-disc list-inside">
                <li>Customer Satisfaction: We put our customers first in everything we do.</li>
                <li>Quality: We offer products that meet the highest standards of quality.</li>
                <li>Innovation: We continuously seek to improve and innovate our product offerings and services.</li>
                <li>Integrity: We operate with honesty and integrity in all our business dealings.</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img className="w-full rounded-lg shadow-lg" src="https://media.istockphoto.com/id/1164366589/photo/this-is-your-shoes-sir-came-back-to-our-store-again.jpg?s=612x612&w=0&k=20&c=3yHbKbcdGsbIWz_LjfXB3ZQO-w3XllNUtqZSPJUG9ng=" alt="Customer Satisfaction" />
              <img className="w-full rounded-lg shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdsW46hQ8MP2S699U8J3PCG969NB1FXvc_w&s" alt="Quality" />
              <img className="w-full rounded-lg shadow-lg" src="https://www.leadfuze.com/wp-content/uploads/2021/11/376KN_ISplE-3.jpg" alt="Innovation" />
              <img className="w-full rounded-lg shadow-lg" src="https://www.firmofthefuture.com/oidam/intuit/sbseg/en_us/Blog/Photography/Stock/4-ways-to-improve-client-relationships-us-en.png" alt="Integrity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
