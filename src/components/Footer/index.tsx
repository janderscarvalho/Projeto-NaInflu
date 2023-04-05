import { useState } from 'react'
import logoimg from '../../assets/logo.svg'

import { FooterContainer, SocialIcons, CreditsContainer,CreditsText, CreditsSubtext } from './styles'

const tempIcon = () => {
  return (
    <div>Icone temporário</div>
  );
};

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <div>Icone temporário</div>
        <div>Icone temporário</div>
        <div>Icone temporário</div>
      </SocialIcons>
      <CreditsContainer>
        <CreditsText>Créditos do autor</CreditsText>
        <CreditsSubtext>Contato com texto e subtexto</CreditsSubtext>
      </CreditsContainer>
    </FooterContainer>
  );
};