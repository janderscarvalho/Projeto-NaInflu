import { useState } from 'react'
import styled from "styled-components";
import { MainContainer, MainText} from './styles'

export function Main () {  


    return (

<MainContainer id="inicio">
     <MainText>
     <div>
        <h1>Desmarketize-se: </h1>
        <p>Humanizando marcas e produzindo valor.</p>
        <a>+ de 100 Milhões de contas alcançadas</a>
        <a>+ de 1000 influencers micro, médio e macro</a>
    </div>
    <button>Entre em contato</button>
    </MainText>
</MainContainer>
    );
  };
