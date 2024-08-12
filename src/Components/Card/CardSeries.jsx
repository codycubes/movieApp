import React from 'react';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';

const CardSeries = ({ id, url }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/series/${id}`);
  };

  return (
    <Link to={`/series/${id}`}>
    <div className="Card" >
      <img className="cardIMG" src={url} alt="alt" />
    </div>
    
    </Link>
    

  );
};

export default CardSeries;
