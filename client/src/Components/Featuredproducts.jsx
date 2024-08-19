
import { Link } from 'react-router-dom';
const Card = ({ image, title, price, rating }) => {

  return (
    <div className="w-full sm:w-96 md:w-96 lg:w-96 p-4 relative">
      <div className="bg-cover bg-center h-80 sm:h-96 rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}>
        <div className="bg-opacity-60 h-full flex flex-col justify-end p-4">
          <h2 className="text-black text-4xl font-semibold mb-2">{title}</h2>
        
          <div className="flex flex-row space-x-2">
            <span className="text-black text-lg font-bold">${price}</span>
            <span className="text-yellow-500">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
        🛒
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91f481e7-5887-454a-8d04-c485c70052fe/air-force-1-pltaform-womens-shoes-XL2m2Q.png',
      title: 'Nike',
      price: 120,
      rating: 4,
    },
    {
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2dc8f82b11754a3ebba789390f72f4de_9366/Swift_Run_1.0_Shoes_White_IE7475_01_standard.jpg',
      title: 'Addidas',
      price: 25,
      rating: 5,
    },
    {
      image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Vans-Authentic-White-Canvas-Skate-Shoes-_135644.jpg',
      title: 'Vans',
      price: 90,
      rating: 4,
    },
  ];

  return (
    <div id="project" className="min-h-screen bg-white p-4 flex flex-col items-center">
      <p className="text-2xl text-gray-500 mb-6">Featured Products</p>
      <h2 className="text-3xl font-bold mb-6">Top picks</h2>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      
      <Link to="/store" className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blue-700 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          
      <span className="ml-2">See more</span>
        </Link>
    </div>
  );
};

export default CardList;
