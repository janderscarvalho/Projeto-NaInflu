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
  z-index: 1;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
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