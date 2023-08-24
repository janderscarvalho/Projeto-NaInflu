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
  width: 90%;
  height: auto;
  max-height: 10vh;
  margin-top: 4rem;
  background-color: transparent;
  padding: 2rem;
  border: 1rem;
  border-radius: 0.25rem;
  transform: scale(0.9); /* Valor ajustado para diminuir a escala */

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    padding: 0rem;
    margin-top: 0.5rem;
    max-height: 70vh;
    width: 50vh;
    transform: scale(0.8); /* Valor ajustado para dispositivos móveis */
  }
`;

export const Titulo = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -3rem;
  margin-top: 4rem;
  font-family: 'Abel', sans-serif;
  font-size: 3rem;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 3rem;
    margin-top: 3rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 3px 8px 8px -8px #553268;
  border-radius: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    padding: 0.5rem;
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
  display: flex;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
  margin-top: 0rem;
  height: auto;
  max-height: 83vh;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    max-height: none;
    margin-top: -2rem;
    margin-bottom: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
  }


`;


