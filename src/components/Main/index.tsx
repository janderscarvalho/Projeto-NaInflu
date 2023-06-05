import { useState } from 'react';
import styled from 'styled-components';
import { MainContainer, MainText, ButtonContato } from './styles';

interface Mainprops {
    onOpenNewEmailModal: () => void;
  }

export function Main({ onOpenNewEmailModal }: Mainprops) {
  return (
    <MainContainer id="inicio">
      <MainText>
        <div>
          <h1>Desmarketize-se: </h1>
          <p>Humanizando marcas e produzindo valor.</p>
          <a>+ de 100 Milhões de contas alcançadas</a>
          <a>+ de 1000 influencers micro, médio e macro</a>
        </div>
        <ButtonContato onClick={onOpenNewEmailModal}>Contato</ButtonContato>
      </MainText>
    </MainContainer>
  );
}
