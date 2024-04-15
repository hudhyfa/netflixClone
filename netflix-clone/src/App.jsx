import "./App.css";
import Row from "./Row.jsx";
import requests from "./requests.js";
import Banner from "./Banner.jsx";
import Nav from './Nav.jsx';
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.fetchPopular}/>
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title={"Top rated"} fetchUrl={requests.fetchTopRated} />
      <Footer />
    </div>
  );
}

export default App;
