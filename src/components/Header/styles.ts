import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #553268;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  border: #553268;
  z-index: 2;

@media (max-width: 767px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2rem 1rem;
}
`;

export const Logo = styled.img`
  margin-right: auto;
  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 10px;
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
    font-size: 0.8rem;
    margin: 10px;
  }
`;

export const ButtonContato = styled.button`
  background-color: #9766F5;
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
`;




