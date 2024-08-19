// Services.js
import React from 'react';
import { FaTruck, FaCreditCard, FaUserCheck, FaHeadset } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-84 h-full">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => window.location.href = buttonLink}
      >
        {buttonText}
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Get your order delivered quickly with our fast and reliable shipping services.',
      buttonText: 'Learn More',
      buttonLink: '/fast-delivery',
    },
    {
      icon: <FaCreditCard />,
      title: 'Secure Payments',
      description: 'Shop with confidence using secure and encrypted payment methods.',
      buttonText: 'View Options',
      buttonLink: '/secure-payments',
    },
    {
      icon: <FaUserCheck />,
      title: 'Quality Assurance',
      description: 'Assured quality and authenticity of products for a satisfying shopping experience.',
      buttonText: 'Explore Quality',
      buttonLink: '/quality-assurance',
    },
    {
      icon: <FaHeadset />,
      title: 'Customer Support',
      description: '24/7 customer service support to assist you with any queries or concerns.',
      buttonText: 'Contact Us',
      buttonLink: '/contact-us',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
