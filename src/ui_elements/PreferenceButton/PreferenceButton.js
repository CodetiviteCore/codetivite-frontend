import styled from 'styled-components';
import { devices } from '../../utils/MediaQueiyBreakPoints';

const ButtonStyle = styled.div`
    padding: 1rem 2rem;
    outline: none;
    border: none;
    font-weight:400;
    background-position:center;
    transition: all 0.3s ease-in-out ;
    font-size: 0.87rem;
    &:hover{
        cursor:pointer;
        opacity:${({ preference }) => preference ? 1 : 0.8};
        background-color:${({ preference }) => preference ? "var(--primary)" : null} ;
        color:${({ preference }) => preference ? "var(--white)" : null}
    }
    @media ${devices.tablet} {
        font-size: 0.8rem;
        padding:0.5rem 0.5rem ;
    }
`


export const PreferenceButton = ({
    children,
    onClick,
    active,
    ...props
}) => {
    return (
        <ButtonStyle
            {...props}
            onClick={onClick}
            style={{
                backgroundColor: active ? "var(--primary)" : "var(--primary-light)",
                color: active ? "var(--white)" : "var(--primary)",
            }}
        >
            {children}
        </ButtonStyle>
    )
};