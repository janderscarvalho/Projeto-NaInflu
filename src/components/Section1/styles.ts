import React from "react";
import styled from "styled-components";
import somos from '../../assets/somos.svg'

export const MainContainer = styled.div`
position: relative;
width: 100%;
height: 110vh;
margin-top:  -1rem;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
padding: 0rem;
border: 0;
overflow: auto; 
margin-left: 1rem;


@media (max-width: 767px) {
flex-direction: column;
height: auto;
}
`;

export const MainText = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family:'Abel', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  border: 0.25rem solid #553268;
  padding: 1rem;
  max-width: 600px;
  max-width: 40%;
  max-height: 90%;
  margin-right: 3rem;
  max-height: 100%;
  border-radius: 0.5rem;
  box-shadow: 3px 8px 70px -8px #553268;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    text-align: center;
    
  }

  h2 {
    color: #000000;
    font-size: 3rem;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    max-width: 767px;
    color: #000000;
    font-size: 1.5rem;
    font-family:'Abel', sans-serif;
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
  margin-bottom: 1rem;
  margin-top: 0rem;
  background-image: url(${somos});
  background-size: cover;
  background-position: center;
  border: 1px;
  float: left;
  border-radius: 0.5rem;
  

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    
  }
`;
