// src/components/Card.js
import React from 'react';
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
} from '../styles/CardStyles';

const Card = ({ title, description }) => {
  return (
    <CardContainer>
      <CardInner>
        <CardFront>
          <h3>{title}</h3>
        </CardFront>
        <CardBack>
          <p>{description}</p>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
