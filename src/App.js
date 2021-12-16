import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js';
import React from "react";
import { Routes, Route } from "react-router-dom";
import ListItem from './components/listItem/ListItem';
import TableComponent from './components/table/TableComponent.js';
import Homepage from './components/homepage/Homepage.component.jsx';


function App() {

  return (
    <div>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dax40" element={<TableComponent />} />
          <Route path="/dax40/:value" element={<ListItem />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
