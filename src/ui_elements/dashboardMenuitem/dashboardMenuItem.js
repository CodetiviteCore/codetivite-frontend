import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: inherit;
    background-color: transparent;
    align-items: center;
    justify-content: flex-start;
    padding: 0.9rem 1.3rem;
    transition: all .6s ease;
    &:hover{
        background-color: var(--primary-light);
        cursor: pointer;
        a{
            color: var(--primary);
        }
    }

`
const Items = styled(Link)`
    display: flex;
    gap: 11px;
    font-size: 1rem;
    color: var(--dashboardText);
    text-decoration: none;
    transition: all .6s ease;
    /* transition-delay: ${({ show }) => (show ? "0.5s" : "0")}; */

`
const Title = styled.p`
    display: ${({ show }) => (show ? 'inline-block' : 'none')};
`

export const DashboardMenuItem = ({ icon, title, path, show }) => {
    return (
        <Container>
            <Items to={`${path}`}>
                <div>{icon}</div>
                <Title show={show}>{title}</Title>
            </Items>
        </Container>
    )
}