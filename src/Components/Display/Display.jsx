import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieData, SeriesData } from '../../DATA.json';

const Display = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        console.log('MovieData:', MovieData);
        console.log('ID:', id);
      let foundItem = MovieData.find((item) => item.id === parseInt(id));
      if (!foundItem) {
        foundItem = SeriesData.find((item) => item.id === parseInt(id));
      }
      if (foundItem) {
        setItem(foundItem);
      }
    }, [id]);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="detail-page">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          {/* Display other properties of the item here */}
        </div>
    );
};

export default Display;
