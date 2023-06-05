import React from "react";
import styled from "styled-components";
import somos from '../../assets/somos.svg'

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1120px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 0rem;
  border: 0;
  overflow: auto;
 

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-image: url(${somos});
    background-size: cover;
    background-position: center;
    
  }
`;

export const MainText = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  font-family: 'Abel', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  border: 0.25rem solid #553268;
  padding: 1rem;
  max-width: 600px;
  border-radius: 0.5rem;
  box-shadow: 3px 8px 70px -8px #553268;
  margin-right: 2rem;

  @media (max-width: 790px) {
    width: 90%;
    text-align: center;
    margin-top: 2rem;
    margin-left: 2rem;
    box-shadow: none;
  }

  h2 {
    color: #000000;
    font-size: 3rem;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    color: #000000;
    font-size: 1.5rem;
    font-family: 'Abel', sans-serif;
    font-style: italic;
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    max-height: 100%;
  }
`;

export const MainImage = styled.div`
  width: 40%;
  height: 1000px;
  margin-bottom: 1rem;
  margin-top: 0rem;
  background-image: url(${somos});
  background-size: cover;
  background-position: center;
  border: 1px;
  float: left;
  border-radius: 0.5rem;

    @media (max-width: 790px) {
    display: block;
    padding: 1 2rem ;
    width: 100%;
    height: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    background-image: url(${somos});
    background-size: cover;
    background-position: center;
    border: 1px;
    border-radius: 0.5rem;
    
  }
  
`;