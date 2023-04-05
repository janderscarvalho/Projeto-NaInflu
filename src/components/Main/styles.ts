import styled from "styled-components";
import main from '../../assets/main.svg'

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:before {
    content: "";
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 90%;
    background-color: #282828;
    background-image: url(${main});

    background-size: cover;
    background-position: center;
    opacity: 0.3;
    
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MainText = styled.div`
  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  transition: filter 0.2s;
  
  border-radius: 0.5rem;
  width: 100%;
  z-index: 1;
  font-family: 'Abel', sans-serif;

  font-weight: 600;
  
 p {
    color: #553268;
    font-size: 4rem;
    font-family: 'Abel', sans-serif;
    font-weight: 600;
    margin: 0;
    margin-top: 1rem;
  }

  & > p:first-child {
    color: #553268;
    font-size: 3rem;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
    
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
      filter: brightness(0.9);
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
