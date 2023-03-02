import React, { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 600px;
  max-height: 80vh;
  overflow: auto;
`;

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <button onClick={onClose}>Close</button>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
};