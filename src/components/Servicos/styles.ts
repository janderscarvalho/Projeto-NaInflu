import React, { useState } from "react";
import styled from "styled-components";
import prospec from '../../assets/services/prospec.svg';
import produ from '../../assets/services/produ.svg';
import brif from '../../assets/services/brif.svg';
import gest from '../../assets/services/gest.svg';
import bud from '../../assets/services/bud.svg';

interface DescriptionOverlayProps {
  showDescription: boolean;
}



export const MainContainer = styled.div`
  display: block;
  margin-top: auto;
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0;
  border: 0;
  margin-top: 60vh;

  @media (max-width: 768px) {
    margin-top: 90vh;
    margin-bottom: 10rem;
  }
`;


export const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
  padding: 2rem;
  text-align: center;
`;

export const ServicesGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-gap: 2rem;
  margin: 0 auto;
  padding: 2rem;
  width: 1000px;
  height: 800px;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
  }


`;

export const Service = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 3px 8px 8px -8px #553268;
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const ServiceDescription = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 1.2rem;
  color: #555;
  margin: 1rem 0;
`;

export const DescriptionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: ${({ showDescription }: DescriptionOverlayProps) => (showDescription ? "block" : "none")};
`;

export const DescriptionBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 3px 8px 8px -8px #553268;
  border-radius: 1rem;
  padding: 2rem;
  z-index: 2;
  text-align: center;
  max-width: 30%;

  @media (max-width: 768px) {
    max-width: 75%;
  }
`;


export const DescriptionTitle = styled.h3`
  font-family: 'Abel', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #553268;
  margin-top: 0;
`;

export const DescriptionText = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 1;
  color: #555;
  margin: 1rem 0;
`;
