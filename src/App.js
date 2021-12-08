import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Heading from "./components/heading/Heading.js";
import CardComponent from './components/card/CardComponent.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';
import { useState } from "react";



function App() {

  const [data, setData] = useState([]);
  const [isVisible, setVisibility] = useState(false);
  const [areDAXValuesVisible, setVisibilityFromDAXValues] = useState(false);
  const [valuesDAX, setValuesDAX] = useState([]);

  const fetchData = () => {

    /*example fetch: volume data */

    const url = "https://api.leeway.tech/api/v1/public/historicalquotes/SAP.XETRA?apitoken=37zxr4r5zrfyuhr143n4hq&from=2020-01-25&to=2021-11-24";

    let dataArray = [];

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          dataArray.push(element);
        })
        setData(dataArray);
        setVisibility(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

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
    }
    ]
    setVisibilityFromDAXValues(true);
    setValuesDAX(dax40);
  }



  return (
    <div>


      <div className="App">
        <Navigation />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Heading />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div onClick={() => getDaxValues()}>
            <CardComponent title="DAX" imageUrl="images/flagGermany.png" />
          </div>
          <CardComponent title="S&P 500" imageUrl="images/flagUSA.png" />
          <CardComponent title="Nikkei 225" imageUrl="images/flagJapan.png" />
        </div>

        <><button onClick={() => fetchData()}>fetchData</button></>

        <Content data={data} isVisible={isVisible} values={valuesDAX} areDAXValuesVisible={areDAXValuesVisible} />



      </div>

      <Footer />

    </div>
  );
}

export default App;
