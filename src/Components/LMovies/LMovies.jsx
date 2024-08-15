import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export const LMovies = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const apiUrl = 'http://localhost:8888/MovieData?type=Movie&_limit=6';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setShows(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchShows();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/AddPage`);
  };

  const moreMoviesClick = () => {
    navigate('/Movies')
  }

  return (
    <>
      <div className="relative w-full bg-gray-100 p-10 md:px-40">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-light mt-10">LATEST MOVIES</h1>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleClick}
          >
            ADD
          </button>
        </div>

        <div className="flex flex-wrap justify-around mt-10 gap-8">
          {shows.map((movie) => (
            <div
              key={movie.id}
              className="w-full max-w-xs text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 rounded-xl"
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie.url}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg"
                />
                <h2 className="mt-2 text-lg font-normal">{movie.title}</h2>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={moreMoviesClick}>
            MORE
          </button>
        </div>
      </div>
    </>
  );
};
