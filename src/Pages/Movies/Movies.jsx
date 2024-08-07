import React from "react";
import './Movies.css'
import { MovieData } from '../../DATA.json'
import Card from "../../Components/Card/Card";

const Movies = () => {
    return(
        <>
        <div className="hero">
            <div className="hero-image">
                <img src="./onlyMurder.png" alt="Hero" />
                
                <div className="hero-text">
                    <h1 className="header">Latest Movies</h1>
                </div>
            </div>

            <div className="cardContainerM">

            {MovieData.map((item) => (
             <Card key={item.id} url={item.url}  />
             
      ))}

              {/* <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 1" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 2" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 3" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 4" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 1" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 2" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 3" />
              </div>

              <div className="Card">
                  <img className="cardIMG" src="./SquidGames.png" alt="Article 4" />
              </div> */}

</div>
</div>



</>


  

    )
}

export default Movies
