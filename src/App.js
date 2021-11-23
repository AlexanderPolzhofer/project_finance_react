import './App.css';
import Navigation from './components/Navigation.js';
import Heading from "./components/Heading.js";
import CardComponent from './components/CardComponent.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Heading />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CardComponent title="DAX" imageUrl="images/flagGermany.png"/>
        <CardComponent title="S&P 500" imageUrl="images/flagUSA.png"/>
        <CardComponent title="Nikkei 225" imageUrl="images/flagJapan.png"/>
      </div>


      <Content />
      <Footer />

    </div>
  );
}

export default App;
