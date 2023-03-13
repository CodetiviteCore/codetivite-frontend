import  styled from 'styled-components';
import { devices } from './../../utils/MediaQueiyBreakPoints';

const ButtonStyle = styled.button`
    padding: 1rem 2rem;
    background-color: ${({primary,scrolled})=> primary ? "var(--primary)" : scrolled ? "var(--primary)" : "var(--primary-light)"};
    color: ${({primary,scrolled})=>primary ? "var(--white)" : scrolled ? "var(--white)" : "var(--primary)"};
    outline: none;
    border: none;
    border-radius:${({preference})=>preference ? "0px" : "6.25rem"};
    font-weight:${({preference})=>preference ? "400" : null} ;
    background-position:center;
    transition: all 0.3s ease-in-out ;
    &:hover{
        cursor:pointer;
        opacity:${({preference})=>preference ? 1 : 0.8};
        background-color:${({ preference }) => preference ? "var(--primary)" : null} ;
        color:${({preference})=>preference ? "var(--white)" : null}
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