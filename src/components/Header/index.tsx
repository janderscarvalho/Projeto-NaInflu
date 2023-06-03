import Modal from 'react-modal';
import { useState } from 'react'
import logoimg from '../../assets/logo.svg'

import { HeaderContainer, Button, ButtonContato, Logo } from './styles'

interface Headerprops {
  onOpenNewEmailModal: () => void;
}

export function Header({onOpenNewEmailModal}: Headerprops) {
 
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Logo src={logoimg} alt="Logo" />
      <div>
        <Button onClick={() => scrollToSection('inicio')}>Início</Button>
        <Button onClick={() => scrollToSection('sobre')}>Sobre</Button>
        <Button onClick={() => scrollToSection('parcerias')}>Parcerias</Button>
        <Button onClick={() => scrollToSection('serviços')}>Serviços</Button>
        <ButtonContato onClick={onOpenNewEmailModal}>Contato</ButtonContato>
      </div>



    </HeaderContainer>
  )
}
