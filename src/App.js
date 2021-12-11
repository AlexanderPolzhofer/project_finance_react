import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Heading from "./components/heading/Heading.js";

import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';

import React, { useState } from "react";
import { Cardlist } from './components/cardList/CardList';
import TableComponent from './components/table/TableComponent.js';



function App() {
  const [areDAXValuesVisible, setVisibilityFromDAXValues] = useState(false);
  const [valuesDAX, setValuesDAX] = useState([]);

  const getDaxValues = () => {
    const dax40 = [{
      id: 1,
      Name: "ADIDAS AG NA O.N.",
      ISIN: "DE000A1EWWW0"
    },
    {
      id: 2,
      Name: "AIRBUS SE",
      ISIN: "NL0000235190"
    },
    {
      id: 3,
      Name: "SAP",
      ISIN: "DE0007164600"
    }
    ]
    setVisibilityFromDAXValues(true);
    setValuesDAX(dax40);
  }


  const fetchSpringAPI = () => {

    const url = "http://localhost:8080/stock/value/SAP.XETRA";

    let obj = {};

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        data = obj;
        console.log(obj);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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


        <button onClick={() => fetchSpringAPI()}>fetching data from spring api</button>
        <button onClick={() => getDaxValues()}>get dax values from state</button>

        <TableComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
