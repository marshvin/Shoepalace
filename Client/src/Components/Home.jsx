import React from 'react';

const Home = () => {
  const containerStyle = {
    minHeight: '100vh',
    background: `url(${process.env.PUBLIC_URL}/jakob-owens-JzJSybPFb3s-unsplash.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 className="text-4xl font-extrabold text-black mb-4">Welcome to Shoe Palace</h1>
        <p className="text-lg text-blue-900 mb-8">
          Explore the latest trends in footwear. Step into style and comfort with our premium shoe collection.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
