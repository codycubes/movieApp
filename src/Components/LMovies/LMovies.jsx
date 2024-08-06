import React from "react";
import './LMovies.css'

export const LMovies = () => {
    return (
        <>
            <div className="Container">
                <div className="header">
                    <h1 className="title">Latest Movies</h1>
                </div>
            

                <div className="cardContainer">

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
                    </div>
                    

                   <div className="buttContainer">
                    
                    <button className="moreButt">More</button>
                    
                    </div> 

                    
                </div>
            </div>
        </>
    )
}
