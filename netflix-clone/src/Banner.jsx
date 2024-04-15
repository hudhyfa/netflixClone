import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Banner.css';

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      } catch (error) {
        throw new Error("can't fetch movie for banner", error);
      }
    }
    fetchData();
  }, []);

  return (
    // <header
    //   className="banner"
    //   style={{
    //     backgroundSize: "cover",
    //     backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    //     backgroundPosition: "center center",
    //   }}
    // >
    //   <div className="banner_contents">
    //     <h1 className="banner_title">{movie?.title || movie?.name || movie?.originalName}</h1>
    //     <div className="banner_buttons">
    //       <button className="banner_button">Play</button>
    //       <button className="banner_button">My List</button>
    //     </div>
    //       <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
    //   </div>
    // </header>
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://petapixel.com/assets/uploads/2023/11/recreate-cinematic-john-wick-movie-poster-feat-800x420.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">John wick: chapter 4</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h3 className="banner_description">{truncate( "John Wick, a legendary hitman, has retired from the assassin underworld to live a peaceful life with his ailing wife. After her passing, he receives a final gift from her - a puppy, a reminder of a future they can no longer have. John's grief is shattered when his home is invaded by ruthless gangsters who steal his prized car and, in a cruel act of defiance, kill the puppy.Consumed by rage, John reawakens the deadly assassin within.  He descends back into the criminal underworld he left behind, seeking vengeance on those who took everything from him.  Aided by a network of assassins and shrouded in the secrecy of a hidden society, John Wick embarks on a relentless pursuit, leaving a trail of bodies in his wake.This action-packed neo-noir thriller will take you on a journey of revenge, violence, and a glimpse into the unseen world of assassins.",150)}</h3>
        <div className="banner--fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner;
