import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisplaySeries = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);  // Start with null for better handling of loading state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(`http://localhost:8888/MovieData/${id}`);

                setItem(response.data);
            } catch (error) {
                console.error("There was an error fetching the details!", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    // console.log('id is :', id)

    if (loading) return <div>Loading...</div>;
    if (!item) return <div>No details found.</div>;

    return (
        <div className="detail-page">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {/* Display other properties of the movie or series here */}
        </div>
    );
};

export default DisplaySeries;
