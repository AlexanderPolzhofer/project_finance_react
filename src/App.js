import './App.css';
import Navigation from './components/Navigation.js';
import Heading from "./components/Heading.js";
import CardComponent from './components/CardComponent.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import { useState } from "react";


function App() {

  const [data, setData] = useState([]);
  const [isVisible, setVisibility] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {

    const url = "https://api.leeway.tech/api/v1/public/historicalquotes/SAP.XETRA?apitoken=37zxr4r5zrfyuhr143n4hq&from=2020-01-25&to=2021-11-24";

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          console.log("volume: " + element.volume)
          console.log("date: " + element.date)
          setData(element);
          setVisibility(!isVisible);
        },
        (error) => {
          setVisibility(true);
          setError(error);
        })
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="App">
      <Navigation />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Heading />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CardComponent title="DAX" imageUrl="images/flagGermany.png" />
        <CardComponent title="S&P 500" imageUrl="images/flagUSA.png" />
        <CardComponent title="Nikkei 225" imageUrl="images/flagJapan.png" />
      </div>

      <><button onClick={() => fetchData()}>fetchData</button></>

      <Content volumeData={data.volume} tradingDate={data.date} isVisible={isVisible} error={error}/>

      <Footer />

    </div>
  );
}

export default App;
