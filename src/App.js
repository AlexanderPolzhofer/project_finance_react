import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from './components/homepage/Homepage.component.jsx';
import IndexScreen from './screens/IndexScreen';
import StockDetail from './screens/StockDetail';


function App() {

  return (
    <div>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/indices" element={<IndexScreen />} />
          <Route path="/indexDetails" element={<StockDetail />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
