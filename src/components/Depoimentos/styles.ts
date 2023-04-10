import styled from "styled-components";
import prospec from '../../assets/services/prospec.svg';
import produ from '../../assets/services/produ.svg';
import brif from '../../assets/services/brif.svg';
import gest from '../../assets/services/gest.svg';
import bud from '../../assets/services/bud.svg';
import main from '../../assets/main.svg'



export const MainContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;
  padding: 0;
  border: 0;
  margin-top: 1vh;
`;

export const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  font-size: 6rem;
  font-weight: 600  ;
  padding: 2rem;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 4rem;
  }
`;

export const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1700px;
  background-repeat: no-repeat;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 3px 8px 25px -3px #553268;
  border-radius: 1rem;
  width: 70rem;
  height: 20rem;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 20rem;
    width: 90%;
  }
`;

export const ServiceImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 60%;
    height: 60%;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const ServiceTitle = styled.h3`
  font-family: 'Abel', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-align: start;

  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const ServiceDescription = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #555;
  margin: 1rem 3rem 2rem 3rem;
  text-align: center;
  word-wrap: break-word;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 1.2rem;
    text-align: left;
  }
`;



export const ImageTop = styled.div`
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
    
    
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;