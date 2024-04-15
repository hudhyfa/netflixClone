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
      <Row title={"Top rated TV series"} fetchUrl={requests.fetchTopRatedTvSeries} />
      <Row title={"Top rated Movies"} fetchUrl={requests.fetchTopRatedMovies} />
      <Row title={"Trending TV series"} fetchUrl={requests.fetchTrendingTvSeries} />
      <Row title={"Trending Movies"} fetchUrl={requests.fetchTrendingMovies} />
      <Footer />
    </div>
  );
}

export default App;
