import styled from "styled-components";
import main1 from '../../assets/main1.svg'

export const MainContainer = styled.div`
  position: relative;
  
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;


  &:before {
    content: "";
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 90%;
    background-color: #282828;
    background-image: url(${main1});

    background-size: cover;
    background-position: center;
    opacity: 0.9;
    
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-left: 0.5rem;
  }
`;

export const MainText = styled.div`
  
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1.5rem;
  box-shadow: 8px 8px 30px -8px #553268;
  border-radius: 1rem;
  width: 70%;
  font-family: 'Abel', sans-serif;
  font-weight: 600;
  opacity: 0.9; 

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }


  
  p {
  font-size: 3.5rem;
  font-family: 'Abel', sans-serif;
  font-weight: 600;
  margin: 0;
  margin-top: 1rem;
  margin-left: 1rem;

  display: column;
  }

  a {
    font-size: 2rem;
    font-family: 'Abel', sans-serif;
    font-weight: 600;
  }



 button {
    background-color: #553268;
    color: #F8FFFC;
    font-size: 2rem;
    font-family: 'Abel', sans-serif;
    font-weight: medium;
    margin-top: 30px;
    padding: 20px 40px;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    
    &:hover {
    background-color: #7D50E9;
    transform: translateY(-2px);
    box-shadow: 3px 10px 10px -10px #553268;
  }

  &:focus {
    outline: none;
  }
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    border: none;

    & > p:first-child {
      font-size: 32px;
    }
  }
`;
