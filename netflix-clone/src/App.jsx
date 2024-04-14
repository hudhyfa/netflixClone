import { useState } from "react";
import "./App.css";
import Row from "./Row.jsx";
import requests from "./requests.js";
import Banner from "./Banner.jsx";
import Nav from './Nav.jsx';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title={"Top rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Popular"} fetchUrl={requests.fetchPopular} />
      
    </div>
  );
}

export default App;
