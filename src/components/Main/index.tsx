import { useState } from 'react'
import styled from "styled-components";
import { MainContainer, MainText} from './styles'

export function Main () {  


    return (

<MainContainer>
     <MainText>
     <div>
        <p>Conectamos pessoas e conteúdo de qualidade</p>
        <p>+ de 5 Milhões de contas alcançadas</p>
        <p>+ de 100 influencers micro, médio e macro</p>
        <button>Entre em contato</button>
    </div>
    </MainText>
</MainContainer>
    );
  };
