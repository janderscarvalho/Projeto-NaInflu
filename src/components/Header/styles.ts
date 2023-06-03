import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #553268;
  padding: 2rem;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  border: #553268;
  z-index: 1;


@media (max-width: 767px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  padding: 2rem 1rem;
}
`;

export const Logo = styled.img`
  
  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: -1rem;
    
  }
`;

export const Button = styled.button`
  font-family: 'Abel', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #F8FFFC;
  background-color: transparent;
  border: 0;
  margin: 0 10px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    background-color: #9766F5;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const ButtonContato = styled.button`
  background-color: #553268;
  color: #F8FFFC;
  font-family: 'Abel', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
  box-shadow: 3px 8px 8px -8px #553268;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #7D50E9;
    transform: translateY(-2px);
    box-shadow: 3px 10px 10px -10px #553268;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    font-size: 1.0rem;
    margin-bottom: 10px;

  }
`;




