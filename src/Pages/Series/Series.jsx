import React from "react";
import { useState, useEffect } from "react";
import './Series.css'
// import { SeriesData } from '../../DATA'
import CardSeries from "../../Components/Card/CardMovie";
import { Link } from "react-router-dom";


const Series = () => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        const fetchShows = async () => {
            const apiUrl = 'http://localhost:8888/MovieData?type=Series'
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
    return(
        <>
        <div className="hero">
            <div className="hero-image">
                <img src="./onlyMurder.png" alt="Hero" />
                
                <div className="hero-text">
                    <h1 className="header">Latest Series</h1>
                </div>
            </div>


            <div className="cardContainerM">

            {shows.map((serie) => (
            //  <CardSeries key={item.id} url={item.url}  />
            <div key={serie.id} className="Card">
            <Link to={`/serie/${serie.id}`}>
              <img src={serie.url} alt={serie.title} />
              <h2>{serie.title}</h2>
            </Link>
             </div>
            
             
      ))}

   

</div>
</div>



</>


  

    )
}

export default Series
