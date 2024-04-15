import React, { useState, useEffect } from "react";
import instance from "./axios.js";
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
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
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
    console.log(movie);
    if(trailerUrl) {
        setTrailerUrl("");
    } else {
        movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err))
    }
  }

  console.log("asdf",trailerUrl);

  return (
    <>
      <div className="row">
      <h2 style={{marginLeft:"22px"}}>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => {
            return (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            );
        })}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
