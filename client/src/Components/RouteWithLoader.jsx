import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Event listener for when the page content is fully loaded
    const handleLoad = () => {
      setLoading(false);
    };

    // Event listener for when the DOM is fully loaded and parsed
    const handleDOMContentLoaded = () => {
      // You might want to load additional resources or set up logic here
    };

    // Attach the event listeners
    window.addEventListener('load', handleLoad);
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  return loading ? <Spinner /> : <Component {...rest} />;
};

export default RouteWithLoader;
