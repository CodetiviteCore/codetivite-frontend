
import styled from "styled-components"
const Card = styled.div`
    background-color:var(--white) ;
    padding:1.25rem 1rem;
    width:34.75rem;
    box-shadow: 3.7987px 3.7987px 94.9675px rgba(0, 0, 0, 0.06);
    transition:all 1s ;
    h5{
        color:${props=>props.open ? "var(--landing-card-black)" : "var(--text-black)"} ;
    }
`
const Title = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
`
const Expand = styled.button`
    width:2.6rem;
    height:2.6rem;
    background-color: ${props=>props.open ? "var(--gray)" : "var(--primary-light)" };
    display:flex ;
    align-content:center;
    justify-content:center;
    border-radius:50%;
    outline:none;
    border:none;
    p{
        margin:auto;
        font-size:1.2rem;
        color:${props => props.open ? "var(--gray-black)" : "var(--primary)"};
        font-weight: 600;
    }
`
const LandingCard = () => {
    return (
        <>

        </>
    )
}