import  styled from 'styled-components';
import { devices } from './../../utils/MediaQueiyBreakPoints';

const ButtonStyle = styled.button`
    padding: 1rem 2rem;
    background-color: ${props=>props.primary ? "var(--primary)" : "var(--primary-light)"};
    color: ${props => props.primary ? "var(--white)" : "var(--primary)"};
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
        font-size: 0.66rem;
        padding:0.5rem 1rem ;
    }
`

export const Button = ({children,...props}) => {
    return (
        <ButtonStyle
            {...props}
        >
            {children}
        </ButtonStyle>
    )
}