import { useState } from 'react';
import Modal from 'react-modal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section1 } from './components/Sobre';
import { Section2 } from './components/Parcerias';
import { Section3 } from './components/Servicos';
import { GlobalStyle } from "./styles/global";
import { NewEmailModal } from './components/NewEmailModal';


Modal.setAppElement('#root');

export function App() {

  const [IsNewEmailModalOpen, setIsNewEmailModalOpen] = useState (false);

function handleOpenNewEmailModal(){
  setIsNewEmailModalOpen(true);
}

function handleCloseNewEmailModal(){
  setIsNewEmailModalOpen(false);
}

  return (
    <>
     <Header onOpenNewEmailModal={handleOpenNewEmailModal}></Header>
    <Main onOpenNewEmailModal={handleOpenNewEmailModal}></Main>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    
    <Footer onOpenNewEmailModal={handleOpenNewEmailModal}></Footer>

    <NewEmailModal
      isOpen={IsNewEmailModalOpen}
      onRequestClose={handleCloseNewEmailModal}
    />
     <GlobalStyle />
    </>
  );
}


