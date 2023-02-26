
import {
    Link,
    NavLink
} from "react-router-dom";
import styled from "styled-components";



export const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 122px;
`;

export const Logo = styled(Link)`
color:var(--heading-black);
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1rem ;

  @media (max-width: 768px) {
    position: fixed;
    top: 4rem;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    flex-direction: column;
    background-color: #333;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
    transition: all 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
`;

export const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const BurgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: var(--text-black);
  margin: 5px;
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) =>
        isOpen &&
        `
    transform: rotate(-45deg) translate(-5px, 6px);
  `}
`;