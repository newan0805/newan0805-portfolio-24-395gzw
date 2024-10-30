// src/styles/CardStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 200px;
  margin: 20px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`;

export const CardBack = styled(CardFront)`
  background: #333;
  color: #fff;
  transform: rotateY(180deg);
`;
