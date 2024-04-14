import { useState } from 'react'
import './App.css'
import Row from './Row.jsx';

function App() {

  const [ movies, setMovies ] = useState([]);

  return (
    <>
      <h1>Let's build netflix frontend</h1>
      <Row title={"Trending"}/>
      <Row title={"Top rated"}/>
    </>
  )
}

export default App
