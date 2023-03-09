import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section1 } from './components/Section1';
import { GlobalStyle } from "./styles/global";



export function App() {
  return (
    <>
     <Header></Header>
    <Main></Main>
    <Section1></Section1>
     <GlobalStyle />
    </>
  );
}


