import React, { useEffect, useState } from "react";
import './Movies.css';
import { MovieData } from '../../DATA';
import CardMovie from "../../Components/Card/CardMovie";
import { Link } from "react-router-dom";

const Movies = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {
        const fetchShows = async () => {
            const apiUrl = 'http://localhost:8888/MovieData?type=Movie'
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setShows(data) 

            } catch (error) {
                console.log('Error fetching data', error)

            }
            }

            fetchShows();
        }, [])

    
  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <img src="./onlyMurder.png" alt="Hero" />
          <div className="hero-text">
            <h1 className="header">Latest Movies</h1>
          </div>

        </div>
        <div className="cardContainerM">
          {shows.map((movie) => (
            // <CardMovie key={item.id} id={item.id} url={item.url} />
            <div key={movie.id} className="Card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.url} alt={movie.title} />
              <h2>{movie.title}</h2>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
