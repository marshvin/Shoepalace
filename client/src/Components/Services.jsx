import React from 'react';
import { FaTruck, FaCreditCard, FaUserCheck, FaHeadset } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="flex-1 p-2 min-w-[250px]">
      <div className="bg-white rounded-2xl p-4 h-full group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
        {/* Icon Container */}
        <div className="mb-4 relative">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
            <div className="text-2xl text-blue-500 group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          </div>
          <div className="absolute w-12 h-12 bg-blue-500/10 rounded-xl top-2 -right-2 group-hover:top-1 group-hover:-right-1 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button
            onClick={() => window.location.href = buttonLink}
            className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-500 bg-blue-50 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:shadow-md"
          >
            {buttonText}
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-nowrap justify-between gap-4 overflow-x-auto pb-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services; 