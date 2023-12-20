// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
