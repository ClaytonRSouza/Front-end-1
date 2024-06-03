import React, { useState } from 'react';
import './Card.css';

const Card = ({ título, texto, imagem }) => {
    const [clicado, setClicado] = useState(false);

    const handleCardClick = () => {
        setClicado(!clicado);
    };

    return (
        <div
            className={`cardContainer ${clicado ? 'clicado' : ''}`}
            onClick={handleCardClick}
        >
            <img src={imagem} alt={título} className="cardImagem" />
            <h3 className="cardTitulo">{título}</h3>
            <p className="cardTexto">{texto}</p>
        </div>
    );
};

export default Card;