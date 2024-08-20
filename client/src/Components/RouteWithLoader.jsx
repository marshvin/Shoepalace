import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return loading ? <Spinner /> : <Component {...rest} />;
};

export default RouteWithLoader;
