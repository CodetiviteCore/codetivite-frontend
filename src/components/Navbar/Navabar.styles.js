import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${(props) =>
    props.scrolled ? "green" : "transparent"};
  padding: 20px;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
