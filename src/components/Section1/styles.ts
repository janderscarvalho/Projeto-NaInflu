import React from "react";
import styled from "styled-components";
import mainft1 from '../../assets/mainft1.svg'
import mainft2 from '../../assets/somos.svg'

export const MainContainer = styled.div`
position: relative;
width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #282828;
padding: 1rem;
border: 1px solid #767676;
z-index: 1;

@media (max-width: 767px) {
flex-direction: column;
height: auto;
}
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: medium;
  border: 1px solid #767676;
  padding: 1rem;
  max-width: 600px;
  max-width: 40%;
  max-height: 90%;
  margin-right: 3rem;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    text-align: center;
  }

  h2 {
    color: #F8FFFC;
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    max-width: 767px;
    color: #767676;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    margin: 0S;
    margin-top: 1rem;
    margin-right: 1rem;
    text-align: center;
    max-height: 100%;
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;



export const MainImage = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${mainft2});
  background-size: cover;
  background-position: center;
  border: 1px solid #767676;
  z-index: 1;
  float: left;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;
