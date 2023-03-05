import  styled from 'styled-components';
import { devices } from './../../utils/MediaQueiyBreakPoints';

const ButtonStyle = styled.button`
    padding: 1rem 2rem;
    background-color: ${({primary,scrolled})=> primary ? "var(--primary)" : scrolled ? "var(--primary)" : "var(--primary-light)"};
    color: ${({primary,scrolled})=>primary ? "var(--white)" : scrolled ? "var(--white)" : "var(--primary)"};
    outline: none;
    border: none;
    border-radius:6.25rem ;
    /*ripple effect*/
    background-position:center;
    transition: background 0.8s ease-in-out ;
    &:hover{
        cursor:pointer;
        opacity:0.8;
     
    }
    @media ${devices.tablet} {
        font-size: 1rem;
        padding:0.5rem 1rem ;
    }
`

export const Button = ({ children, ...props }) => {
   
    return (
        <ButtonStyle
            {...props}
        >
            {children}
        </ButtonStyle>
    )
}