import { useState } from 'react';
import styled from 'styled-components';
import { MainContainer, MainText, ButtonContato } from './styles';
import { Button } from '../Header/styles';

interface Mainprops {
  onOpenNewEmailModal: () => void;
}

export function Main({ onOpenNewEmailModal }: Mainprops) {
  return (
    <MainContainer id="inicio">
      <MainText>
        <div>
          <p>Humanizando marcas e produzindo valor.</p>
        </div>
        <ButtonContato onClick={onOpenNewEmailModal}>Contato</ButtonContato>
      </MainText>
      
    </MainContainer>
  );
}
