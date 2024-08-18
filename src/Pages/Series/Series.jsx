import React, { useEffect, useState } from "react";
import { MovieData } from '../../DATA'; // Importing MovieData for potential use (currently commented out)
import CardMovie from "../../Components/Card/CardMovie"; // Importing a card component for displaying movies (currently not used)
import { Link, useNavigate } from "react-router-dom";

// The Series component fetches and displays a list of series from a JSON server
const Series = () => {
    // State to hold the list of series shows
    const [shows, setShows] = useState([]);

    // useEffect hook to fetch series data when the component mounts
    useEffect(() => {
        // Function to fetch series data from the API
        const fetchShows = async () => {
            const apiUrl = 'http://localhost:8888/MovieData?type=Series'; // API endpoint to get only series
            try {
                // Fetch the series data from the server
                const res = await fetch(apiUrl);
                // Parse the response as JSON
                const data = await res.json();
                // Update the state with the fetched data
                setShows(data); 
            } catch (error) {
                console.log('Error fetching data', error); // Log any errors to the console
            }
        };
        fetchShows(); // Call the fetch function when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once

    // useNavigate hook to programmatically navigate to another page
    const navigate = useNavigate();

    // Function to navigate to the AddPage when the "ADD" button is clicked
    const handleClick = () => {
        navigate(`/AddPage`);
    };

    return (
        <>
            <div className="m-0 p-0">
                {/* Hero section with a background image */}
                <div className="relative w-full h-[50vh] overflow-hidden">
                    <img src="./Series/FallOut.png" alt="Hero" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex justify-center items-center text-white">
                        <h1 className="text-4xl font-normal mb-8">LATEST SERIES</h1>
                    </div>
                </div>

                {/* Main content section displaying series cards */}
                <div className="relative mt-5 flex flex-wrap justify-around p-20 gap-16">
                    {/* Add button aligned to the right */}
                    <div className="w-full flex justify-end">
                        <button 
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300" 
                            onClick={handleClick}
                        >
                            ADD
                        </button>
                    </div>

                    {/* Loop through the shows array and render each series as a card */}
                    {shows.map((movie) => (
                        <div 
                            key={movie.id} // Unique key for each series
                            className="w-full max-w-xs text-center shadow-lg rounded-lg hover:scale-105 transition-transform duration-500"
                        >
                            <Link to={`/movie/${movie.id}`}> {/* Link to the detailed series page */}
                                <img src={movie.url} alt={movie.title} className="w-full rounded-xl h-auto object-cover"/>
                                <h2 className="mt-2 text-xl">{movie.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Series;
