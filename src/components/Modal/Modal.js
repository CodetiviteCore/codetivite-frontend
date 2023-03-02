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
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 35rem;
  /* max-height: 8rem; */
  height:fit-content;
  overflow: auto;
  
`;

export const Modal = ({ isOpen, onClose, children }) => {
    return (
        <ModalWrapper
            isOpen={isOpen}
            onClick={onClose}
        >
            <ModalContent>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};
