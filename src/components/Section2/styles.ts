import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
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
`;

export const Titulo = styled.h2`
  font-family: 'Abel', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: -1rem;
  margin-top: 3rem;
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

`;

export const Image = styled.img`
  max-width: 70%;
  max-height: 70%;
`;

export const ParceriasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  height: auto;
  max-height: 83vh;
  margin-bottom: 2rem;
`;

