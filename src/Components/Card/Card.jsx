import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/display/${id}`);
    };

    return (
        <div className="Card" onClick={handleClick}>
            <img className="cardIMG" src={url} alt="alt" />
        </div>
    );
};

export default Card;
