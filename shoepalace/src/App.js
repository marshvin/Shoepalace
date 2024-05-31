// App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';
import CartPage from './pages/CartPage'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
