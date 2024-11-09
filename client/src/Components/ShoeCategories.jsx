import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ title, imageSrc }) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/store', { state: { selectedCategory: title } });
  };

  return (
    <div className="relative overflow-hidden group cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10" />
        <img 
          src={imageSrc} 
          alt={`${title} category`}
          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full p-4 z-20">
          <div className="overflow-hidden">
            <span className="inline-block bg-black text-white px-6 py-3 text-xl font-semibold rounded transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              {title}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <button 
            onClick={handleShopNow}
            className="w-full bg-white text-black py-3 rounded-lg font-medium opacity-90 hover:opacity-100 transition-opacity shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const ShoeCategories = () => {
  const categories = [
    {
      title: 'LADIES',
      imageSrc: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/0616521/1.jpg?1618',
    },
    {
      title: 'MEN',
      imageSrc: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3084,w_4626,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1123158938_uvcada.jpg',
    },
    {
      title: 'FOR KIDS',
      imageSrc: 'https://m.media-amazon.com/images/I/61+8jcRFgZL._AC_UY900_.jpg',
    },
    {
      title: 'TEENS',
      imageSrc: 'https://files.sophie.co.ke/2023/08/619461906_7995-1_6254.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeCategories;