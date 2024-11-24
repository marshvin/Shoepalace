import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // For network and async data
    const loadData = async () => {
      try {
        // Simulate data fetching or other async tasks
        await new Promise((resolve) => setTimeout(resolve, 2000));
        handleLoad();
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    loadData();

    return () => {
      setLoading(false);  
    };
  }, []);

  return loading ? <Spinner /> : <Component {...rest} />;
};

export default RouteWithLoader;
