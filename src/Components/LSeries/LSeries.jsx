import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// The LSeries component displays a list of the latest series and allows navigation to add new ones or view more series
export const LSeries = () => {
  // State to store the fetched series data
  const [shows, setShows] = useState([]);

  // useEffect hook to fetch series data when the component mounts
  useEffect(() => {
    const fetchShows = async () => {
      const apiUrl = 'http://localhost:8888/MovieData?type=Series&_limit=6'; // Fetches the latest 6 series
      try {
        const res = await fetch(apiUrl); // Fetches data from the API
        const data = await res.json(); // Converts the response to JSON format
        setShows(data); // Updates the state with fetched series
      } catch (error) {
        console.log('Error fetching data', error); // Logs any errors during fetching
      }
    };

    fetchShows(); // Calls the function to fetch the series data
  }, []); // Empty dependency array ensures the data is fetched only on component mount

  // Hook to navigate programmatically to different routes
  const navigate = useNavigate();

  // Function to navigate to the 'AddPage' component
  const handleClick = () => {
    navigate(`/AddPage`);
  };

  // Function to navigate to the full list of series
  const moreSeriesClick = () => {
    navigate('/Series');
  };

  return (
    <>
      {/* Container for the series section */}
      <div className="relative w-full bg-gray-100 p-10 md:px-40">
        {/* Title for the section */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-light mt-10">LATEST SERIES</h1>
        </div>

        {/* Button to add a new series, aligned to the right */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={handleClick}
          >
            ADD
          </button>
        </div>

        {/* Container for displaying the fetched series */}
        <div className="flex flex-wrap justify-around mt-10 gap-8">
          {/* Iterates through the fetched series and displays each one */}
          {shows.map((movie) => (
            <div
              key={movie.id} // Unique key for each item
              className="w-full max-w-xs text-center shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Link to navigate to the details page for the selected series */}
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie.url} // Displays the series image
                  alt={movie.title} // Alt text for the image
                  className="w-full h-auto rounded-lg"
                />
                <h2 className="mt-2 text-lg font-normal">{movie.title}</h2> {/* Series title */}
              </Link>
            </div>
          ))}
        </div>

        {/* Button to navigate to view more series, aligned to the right */}
        <div className="flex justify-end mt-10">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={moreSeriesClick}
          >
            MORE
          </button>
        </div>
      </div>
    </>
  );
};
