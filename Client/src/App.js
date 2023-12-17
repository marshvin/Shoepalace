// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
