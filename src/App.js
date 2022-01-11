import './App.css';
import 'fontsource-roboto';

import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/homepage/Homepage.component.jsx';
import IndexScreen from './pages/Indexscreen/IndexScreen';
import StockDetail from './pages/StockDetail/StockDetail';
import Notes from './components/notes/Notes.component';


function App() {

  return (
    <div>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/daxValues" element={<IndexScreen />} />
          <Route path="/indexDetails" element={<StockDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
