import { useState } from 'react';
import { Depoimentos } from './components/Depoimentos';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section1 } from './components/Sobre';
import { Section2 } from './components/Parcerias';
import { Section3 } from './components/Servicos';
import { GlobalStyle } from "./styles/global";




export function App() {
  return (
    <>
     <Header></Header>
    <Main></Main>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Depoimentos></Depoimentos>
    <Footer></Footer>
    
     <GlobalStyle />
    </>
  );
}


