import React from 'react';
import { FaTruck, FaCreditCard, FaUserCheck, FaHeadset } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 w-84 h-full">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Get your order delivered quickly with our fast and reliable shipping services.',
    },
    {
      icon: <FaCreditCard />,
      title: 'Secure Payments',
      description: 'Shop with confidence using secure and encrypted payment methods.',
    },
    {
      icon: <FaUserCheck />,
      title: 'Quality Assurance',
      description: 'Assured quality and authenticity of products for a satisfying shopping experience.',
    },
    {
      icon: <FaHeadset />,
      title: 'Customer Support',
      description: '24/7 customer service support to assist you with any queries or concerns.',
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
