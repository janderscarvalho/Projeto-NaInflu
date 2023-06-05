import styled from "styled-components";
import { darken, transparentize } from "polished";


 
export const ContainerContent = styled.form`

max-width: 600px; /* Largura máxima para a caixa envolta do formulário */
padding: 2rem; /* Espaçamento interno */
border: 1px solid #d7d7d7;
border-radius: 0.25rem;


  h2 {
    font-family: 'Abel', sans-serif;
    color: #553268;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  
  
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #553268;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    input {
      font-size: 0.9rem;
    }

  }

  .social-icons {
    display: block;
    align-items: center;
    gap: 0.5rem; /* Adiciona um espaçamento de 0.5rem entre os ícones e os textos */

    svg {
      margin-right: 0.5rem; /* Adiciona um espaço de 0.5rem à direita dos ícones */
    }
  }
`;


