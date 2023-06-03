import Modal from 'react-modal'
import {  ContainerContent } from './styles';

interface NewEmailModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEmailModal({isOpen, onRequestClose}: NewEmailModalProps) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
       
        <ContainerContent>
       <h2>Entre em Contato</h2>

        <input placeholder='Email'
        />

        <input placeholder='Nome'
        />

        <button type="submit">
            Entrar em Contato
        </button>
        </ContainerContent>
       

       
      </Modal>
    );
}