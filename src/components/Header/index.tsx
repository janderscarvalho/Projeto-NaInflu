import { useState } from 'react'
import logoimg from '../../assets/logo.svg'

import { HeaderContainer, Button, ButtonContato, Logo } from './styles'



export function Header () {

    return (
  <HeaderContainer>
     <Logo src={logoimg} alt="Logo" />
     <div>
      <Button>Início</Button>
      <Button>Sobre</Button>
      <Button>Depoimentos</Button>
      <ButtonContato>Contato</ButtonContato>
    </div>
  </HeaderContainer>
    ) 
    
}