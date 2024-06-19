// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    width: 250;
    max-width: 500px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModalBody = styled.div`
    margin-top: 10px;
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: var(--purple-dark);
    color: white;
    cursor: pointer;
    border-radius: 4px;
`;

export default function Modal({ show, onClose, children, handleClick, title }){
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h4>{title}</h4>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClick}>Excluir</Button>
          <Button onClick={onClose}>Voltar</Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

