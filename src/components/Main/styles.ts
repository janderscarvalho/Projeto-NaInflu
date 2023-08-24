import styled from "styled-components";
import main1 from '../../assets/main1.svg';

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
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-color: #282828;
    background-image: url(${main1});
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    border: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-left: 0;
    margin-top: 3rem;
    align-items: center;
    justify-content: center;

    &:before {size: 100%;}
  }

`;

export const MainText = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1.5rem;
  box-shadow: 8px 8px 30px -8px #553268;
  border-radius: 1rem;
  width: auto;
  height: auto;
  font-family: 'Abel', sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  opacity: 0.6;

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
    padding: 1rem;
    margin-top: 9rem;
    border-radius: 0.5rem;

    p {
      font-size: 1rem;
      font-weight: 400;
      margin-top: 0rem;
      text-align: center;
    }
  }
`;



export const ButtonContato = styled.button`
  display: flex;
  align-items: center;
  background-color: #553268;
  color: #f8fffc;
  font-size: 1.5rem;
  font-family: 'Abel', sans-serif;
  font-weight: 400;
  margin-top: 30px;
  padding: 15px 30px;
  border: 0;
  border-radius: 0.25rem;
  transition: filter 0.2s;  

  &:hover {
    background-color: #7d50e9;
    transform: translateY(-2px);
    box-shadow: 3px 10px 10px -10px #553268;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: justify;
    padding: 10px 50px;
    width: 100%;
    height: 100%;
    border: none;
  }


`;
