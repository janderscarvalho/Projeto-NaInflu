import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { GlobalStyle } from "./styles/global";




export function App() {
  return (
    <>
     <Header></Header>
    <Main></Main>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Footer></Footer>
     <GlobalStyle />
    </>
  );
}


