import { useState } from 'react';
import logoimg from '../../assets/logo.svg';
import { FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { FooterContainer, SocialIcons, CreditsContainer, CreditsText, CreditsSubtext } from './styles';

interface FooterProps {
  onOpenNewEmailModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNewEmailModal }) => {
  return (
    <FooterContainer >
      <SocialIcons>
        <button onClick={onOpenNewEmailModal} style={{ marginRight: '10px' }}>
          <FaWhatsapp size={44} />
        </button>
        <button onClick={onOpenNewEmailModal} style={{ marginRight: '10px' }}>
          <FaLinkedin size={44} />
        </button>
        <button onClick={onOpenNewEmailModal} style={{ marginRight: '10px' }}>
          <FaEnvelope size={44} />
        </button>
      </SocialIcons>
      <CreditsContainer>
        <CreditsText >Images and Site by Jander Stival</CreditsText>
        <CreditsSubtext>janderscarvalho@gmail.com</CreditsSubtext>
      </CreditsContainer>
    </FooterContainer>
  );
};
