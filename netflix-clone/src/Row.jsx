import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

let base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmZkODAwNDVkZTM1NDM3NWE0YmExZTY1MTgyOWQ1MSIsInN1YiI6IjY2MWI2Y2QzZGJhZDUwMDE2MjQzMWZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xfkgwhPkTnTzcIZvkSqn3nWsZPLjzIKTDrQ0JzSxrs8",
          },
        });
        setMovies(request.data.results);
        console.log(request.data.results);
        return request;
      } catch (error) {
        throw new Error("can't fetch movie from " + fetchUrl);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleClick(movie) {
    if(trailerUrl) {
        setTrailerUrl("");
    } else {
        movieTrailer(movie?.name || "")
        .then((url) => {
            const urlParams = URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err))
    }
  }

  function handleSolo() {
    if(trailerUrl === "") {
        setTrailerUrl("s6LcOfdqyEA");
    } else {
        setTrailerUrl("")
    }
  }

  console.log("asdf",trailerUrl);

  return (
    <>
      <div className="row">
      <h2 style={{marginLeft:"22px"}}>{title}</h2>
        <div className="row_posters">
          {/* {movies.map((movie) => {
            return (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                onClick={handleClick(movie)}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            );
        })} */}
    
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            onClick={handleSolo}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://johnwick.movie/assets/img/film/john-wick-4/watch/packaging/product-shot-digital.png`}
          />

        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
