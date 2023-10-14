import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { useEffect } from 'react';
import { devices } from '../../utils/MediaQueiyBreakPoints';
import { AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, children }) => {
    const { setIsModalOpen, emailModal } = useContext(ModalContext);

    useEffect(() => {
        emailModal && setIsModalOpen(true);
    }, [emailModal, setIsModalOpen]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    const preventPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <ModalWrapper
            isOpen={isOpen}
            onClick={closeModal}
            onKeyDown={handleEscape}
            tabIndex="0"
        >
                <ModalHolder
                    onClick={preventPropagation}
                >
                    <ModalContent >
                        {children}
                    </ModalContent>
                    <i
                        className="material-symbols-outlined"
                        onClick={closeModal}
                    >close</i>
                </ModalHolder>
        </ModalWrapper>
    );
};


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
  /* border-radius: 15px; */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  max-width: 35rem;
  /* max-height: 8rem; */
  height:fit-content;
  overflow: auto;
  @media ${devices.tablet}{
    width: 20rem;
    justify-self:center !important;
    h4{
        font-size:1rem;
    }
    p{
        font-size:0.8rem;
    }
    button{
        font-size:0.8rem;
        width:100% !important;
    }
  }
  
`;

const ModalHolder = styled(motion.div)`
    position: relative;
    width: auto;
    display: flex;
    align-items: flex-start;
    i{
    font-size:2rem;
    font-weight: 800;
    color:var(--white);
    transition: all 0.5s ease;
    position: absolute;
    top:-10%;
    right:-10%;
  
    :hover{
        cursor:pointer;
        transform: scale(1.4);
    }
  }
`