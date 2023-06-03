import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: block;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 80%;
  height: auto;
  max-height: 10vh;
  margin-top: 2rem;
  background-color: #ffffff;
  padding: 1rem;
  border: 1rem;
  border-radius: 0.25rem;

  @media (max-width: 767px) {
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(6, 1fr);
padding: 0.5rem;
margin-top: 1rem;
max-height: 50vh;
}
`;

export const Titulo = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -1rem;
  margin-top: 3rem;
  font-family: 'Abel', sans-serif;
  font-size: 4rem;
  font-weight: bold;


  @media (max-width: 767px) {
    font-size: 3rem;
    margin-top: 1rem;
  }
`;


export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  object-fit: contain;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 3px 8px 8px -8px #553268;
  border-radius: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
height: 50%;
margin-bottom: 0.5rem;
}

`;

export const Image = styled.img`
  max-width: 70%;
  max-height: 70%;

  @media (max-width: 767px) {
max-width: 100%;
max-height: 100%;
}
`;

export const ParceriasContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;
  margin-top: 2rem;
  height: auto;
  max-height: 83vh;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    max-height: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
  }
`;

