import { useState } from 'react';
import logoimg from '../../assets/logo.svg';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #553268;
  padding: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 10px;
  }

  svg:hover {
    transform: translateY(-2px);
    border-radius: 0.25rem;
    box-shadow: 3px 10px 10px -10px #553268;
  }

  svg:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const CreditsContainer = styled.div`
  color: #fff;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const CreditsText = styled.p`
  margin: 0;
`;

export const CreditsSubtext = styled.p`
  margin: 0;
  font-size: 0.6rem;
`;
