    import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';


const ModalWrapper = styled(motion.div)`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter:blur(3px);
  z-index: 10000;
`;

const ModalContent = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  max-width: 35rem;
  /* max-height: 8rem; */
  height:fit-content;
  overflow: auto;
  
`;

export const Modal = ({ isOpen, children }) => {
    const { setIsModalOpen } = useContext(ModalContext)
    const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <ModalWrapper
            isOpen={isOpen}
            // onClick={closeModal}
        >
            <ModalContent
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity: 1,
                    x:-10,  
                }}
            >
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};
