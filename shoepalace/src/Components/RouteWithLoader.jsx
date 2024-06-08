// src/components/RouteWithLoader.jsx
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const RouteWithLoader = ({ component: Component }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Spinner /> : <Component />;
};

export default RouteWithLoader;
