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

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
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
    margin-top: 1.5rem;
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

    button[type="submit"] {
      margin-top: 1rem;
    }
  }
`;


