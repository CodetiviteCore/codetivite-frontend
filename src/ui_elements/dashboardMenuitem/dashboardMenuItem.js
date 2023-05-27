import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: inherit;
    background-color: ${({active})=> active ? "var(--primary-light)" : "transparent"};
    align-items: center;
    justify-content: flex-start;
    padding: 0.9rem 1.3rem;
    transition: all .6s ease;
    position:relative ;
    >div{
        color:white;
        background-color:#F37123;
        padding: 3px 7px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:0.6rem;
        width:fit-content;
        border-radius:16px;
        position:absolute;
        top:0;
        right:20px;
    }
    &:hover{
        background-color: var(--primary-light);
        cursor: pointer;
        a{
            color: var(--primary);
        }
    }
    a:active{
        background-color:var(--primary-light);
    }

`
const Items = styled(Link)`
    display: flex;
    gap: 11px;
    font-size: 1rem;
    color: var(--dashboardText);
    text-decoration: none;
    transition: all .6s ease;

`
const Title = styled.p`
    display: inline-block;
`

export const DashboardMenuItem = ({ icon, title, path, comingSoon, activeIndex, setActiveIndex, id }) => {
    return (
        <Container active={activeIndex === id}>
            {comingSoon && <div>Coming soon</div>}
            <Items
                to={comingSoon ? null : `${path}`}
                onClick={()=>setActiveIndex(id)}
            >
                <div>{icon}</div>
                <Title>{title}</Title>
            </Items>
        </Container>
    )
}