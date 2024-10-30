// src/styles/AppStyles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  background: linear-gradient(to bottom, #0a0a0a, #1b1b1b);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`;

export const Section = styled.section`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem; 
  margin-top: 1rem; 
  a {
    // color: #333; 
    text-decoration: none; 
    transition: color 0.2s; 
    
    &:hover {
      color: #0077b5; 
    }
  }
`;
