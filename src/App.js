import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
import './styles/global.css';
import mockStocks from "./data/mockData"; // Correctly import the mock data

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Pass mockStocks as a prop */}
        <Route path="/" element={<Home stocksData={mockStocks} />} />
        <Route path="/stock/:symbol" element={<StockDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
