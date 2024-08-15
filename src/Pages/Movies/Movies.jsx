import React, { useEffect, useState } from "react";
// import { MovieData } from '../../DATA';
// import CardMovie from "../../Components/Card/CardMovie";
import { Link, useNavigate } from "react-router-dom";

const Movies = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            const apiUrl = 'http://localhost:8888/MovieData?type=Movie';
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

    return (
        <>
            <div className="m-0 p-0">
                <div className="relative w-full h-[50vh] overflow-hidden">
                    <img src="./Movies/john-wick-chapter-three.png" alt="Hero" className="w-full  object-cover"/>
                    <div className="absolute inset-0 flex justify-center items-center text-white">
                        <h1 className="text-5xl font-normal mb-8">LATEST MOVIES</h1>
                    </div>
                </div>

                <div className="relative mt-5 flex flex-wrap justify-around p-20 gap-16">
                    <div className="w-full flex justify-end">
                        <button 
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300" 
                            onClick={handleClick}
                        >
                            ADD
                        </button>
                    </div>
                    {shows.map((movie) => (
                        <div 
                            key={movie.id} 
                            className="w-full max-w-xs text-center shadow-lg hover:scale-105 transition-transform duration-500"
                        >
                            <Link to={`/movie/${movie.id}`}>
                                <img src={movie.url} alt={movie.title} className="w-full h-auto object-cover"/>
                                <h2 className="mt-2 text-xl">{movie.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movies;
