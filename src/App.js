import './App.css';

import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/homepage/Homepage.component.jsx';
import IndexScreen from './pages/Indexscreen/IndexScreen';
import StockDetail from './pages/StockDetail/StockDetail';
import NotFoundPage from './pages/not-found-page/NotFoundPage';

import NotesCollection from './components/v2-notes/NotesCollection';


function App() {

  return (
    <div>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/project_finance_react" element={<Homepage />} />
          <Route path="/notes" element={<NotesCollection />} />
          <Route path="/daxValues" element={<IndexScreen />} />
          <Route path="/indexDetails" element={<StockDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
