import  styled from 'styled-components';
import { devices } from './../../utils/MediaQueiyBreakPoints';

const ButtonStyle = styled.button`
    padding: 1rem 2rem;
    background-color: ${props=>props.primary ? "var(--primary)" : "var(--primary-light)"};
    color: ${props => props.primary ? "var(--white)" : "var(--primary)"};
    outline: none;
    border: none;
    border-radius:6.25rem ;
    &:hover{
        cursor:pointer;
    }
    @media ${devices.mobileS} {
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