import Modal from 'react-modal'
import { FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import {  ContainerContent } from './styles';

interface NewEmailModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewEmailModal({isOpen, onRequestClose}: NewEmailModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const redirectToWhatsApp = (phoneNumber: string) => {
    const whatsappURL = `https://wa.me/${985916449}`;
    window.open(whatsappURL, '_blank');
  };

  const redirectToLinkedIn = () => {
    const linkedinURL = 'https://www.linkedin.com/'; // Substitua pela URL do seu perfil no LinkedIn
    window.open(linkedinURL, '_blank');
  };

  const redirectToGmail = () => {
    const emailAddress = 'janderscarvalho@gmail.com'; // Insira seu endereço de e-mail aqui
    const subject = 'Contato'; // Assunto do e-mail
    
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailURL, '_blank');
  };
  
  

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
       
        <ContainerContent>
       <h2>Entre em Contato</h2>

       <button type="submit" onClick={redirectToGmail}>
          <FaEnvelope />
          <span className="social-icons">Entrar em Contato via Gmail</span>
        </button>

        <button type="submit" onClick={redirectToLinkedIn}>
          <FaLinkedin />
          <span className="social-icons">Entrar em Contato via LinkedIn</span>
        </button>

        <button type="submit" onClick={() => redirectToWhatsApp(phoneNumber)}>
          <FaWhatsapp />
          <span className="social-icons">Entrar em Contato via WhatsApp</span>
        </button>
        </ContainerContent>
       

       
      </Modal>
    );
}