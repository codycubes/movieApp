import React from 'react';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';

const CardMovie = ({ id, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/display/${id}`);
  };

  return (
    <Link to={`/display/${id}`}>
          <div className="Card">
      <img className="cardIMG" src={url} alt="alt" />
    </div>
    </Link>

  );
};

export default CardMovie;
