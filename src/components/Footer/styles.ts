import { useState } from 'react'
import logoimg from '../../assets/logo.svg'
import styled from 'styled-components'



export const SocialIcons = styled.div`
  display: flex;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #553268;
  padding: 1rem;
  position: end;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;


export const CreditsContainer = styled.div`
  color: #fff;
  font-size: 0.8rem;
`;

export const CreditsText = styled.p`
  margin: 0;
`;

export const CreditsSubtext = styled.p`
  margin: 0;
  font-size: 0.6rem;
`;