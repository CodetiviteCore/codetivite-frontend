import  styled from 'styled-components';
import { devices } from './../../utils/MediaQueiyBreakPoints';


export const Button = ({ children, ...props }) => {
   
    return (
        <ButtonStyle
            {...props}
        >
            {children}
        </ButtonStyle>
    )
}


const ButtonStyle = styled.button`
    padding: 1rem 2rem;
    background-color: ${({primary,scrolled, newsLetter,transparent})=> primary ? "var(--primary)" : scrolled ? "var(--primary)" : newsLetter ? "var(--primary)" : transparent ? "transparent" : "var(--primary-light)"};
    color: ${({primary,scrolled,newsLetter})=>primary ? "var(--white)" : scrolled ? "var(--white)" : newsLetter ? "var(--white)" : "var(--primary)"};
    outline: none;
    border: none;
    border-radius:${({preference,newsLetter,contact})=>preference ? "0px" : newsLetter ? "8px" : contact ? "10px" : "6.25rem"};
    font-weight:${({preference})=>preference ? "400" : null} ;
    background-position:center;
    width: ${({contact})=> contact && "28.8rem"};
    transition: all 0.3s ease-in-out ;
    display: ${({ contact }) => contact && "flex"};
    justify-content: ${({ contact }) => contact && "flex-start"};
    align-items: ${({contact})=> contact && "center"};
    &:hover{
        cursor:pointer;
        opacity:${({preference})=>preference ? 1 : 0.8};
        background-color:${({ preference }) => preference ? "var(--primary)" : null} ;
        color:${({preference})=>preference ? "var(--white)" : null}
    }
    @media ${devices.tablet} {
        font-size: 0.8rem;
        padding:0.5rem 1rem ;
    }
`