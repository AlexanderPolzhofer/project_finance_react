import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Heading from "./components/heading/Heading.js";
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';
import React, { useState } from "react";
import { Cardlist } from './components/cardList/CardList';
import TableComponent from './components/table/TableComponent.js';
import DAX40_Values from './components/table/daxValues';

function App() {
  const [areDAXValuesVisible, setVisibilityFromDAXValues] = useState(false);
  const [valuesDAX, setValuesDAX] = useState([]);

  const getDaxValues = () => {
    const dax40 = DAX40_Values;
    setVisibilityFromDAXValues(true);
    setValuesDAX(dax40);
  }

  return (
    <div>
      <div className="App">
        <Navigation />
        <div className="heading">
          <Heading />
        </div>
        <Cardlist />
        <Content values={valuesDAX} areDAXValuesVisible={areDAXValuesVisible} />


        <button onClick={() => getDaxValues()}>get dax values from state</button>

        <TableComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
