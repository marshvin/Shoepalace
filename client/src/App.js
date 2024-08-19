// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';
import CartPage from './pages/CartPage';
import RouteWithLoader from './Components/RouteWithLoader';

import About from './Components/About';
import Storepage from './pages/Storepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteWithLoader component={Homepage} />} />
        <Route path="/signin" element={<RouteWithLoader component={Signinpage} />} />
        <Route path="/signup" element={<RouteWithLoader component={Signuppage} />} />
        <Route path="/store" element={<RouteWithLoader component={Storepage} />} />
        <Route path="/about" element={<RouteWithLoader component={About} />} />
        
        <Route path="/cart" element={<RouteWithLoader component={CartPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
