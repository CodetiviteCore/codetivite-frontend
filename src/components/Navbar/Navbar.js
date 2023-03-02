import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import { BlackLogo } from '../../assets/svgs';
import { Button } from '../../ui_elements';
import { devices } from './../../utils/MediaQueiyBreakPoints';


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);



  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <NavigationBar scrolled={scrolled}>
      <Logo>c<span><BlackLogo /></span>detivite</Logo>
      <HamburgerContainer onClick={handleHamburgerClick}>
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
      </HamburgerContainer>
      <NavListContainer isMenuOpen={isMenuOpen}>
        <NavList>
          <NavItem>Our community</NavItem>
          <NavItem>Clarity test</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact us</NavItem>
          <NavItem>Our blog</NavItem>
        </NavList>
        <Button scrolled={scrolled}>Login or Sign up</Button>
      </NavListContainer>

    </NavigationBar>
  );
};


const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color: ${({ scrolled }) => (scrolled ? "var(--primary-light)" : "transparent")};
  position: ${({ scrolled }) => (scrolled ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width:${({ scrolled }) => (scrolled ? "-webkit-fill-available" : "initial")};
  height:10vh;
  padding:0 8%;
  transition: background-color 0.5s ease;
  z-index: 10;
  @media ${devices.tablet}{
    flex-wrap:wrap;
  }
  

`;
const Logo = styled.h1`
  font-size:1.5rem ;
  display:flex;
  align-items:center ;
  span{
    padding-top:8px ;
  }

`
const NavList = styled.ul`
  list-style:none;
  display:flex;
  gap: 40px;
  @media ${devices.tablet}{
    display: flex;
    flex-direction: column;
  
  }
`
const NavListContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between ;
  width:72%;
  @media ${devices.tablet}{
    position:fixed;
    top:10vh;
    left: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};
    display:${({ isMenuOpen }) => isMenuOpen ? "flex" : "none"};
    flex-direction: column;
    justify-content:space-around ;
    align-items:center ;
    background-color:var(--primary);
    transition: all 2as ease-in-out;
    height:${({ isMenuOpen }) => isMenuOpen ? "100vh" : "0"};
    width:${({isMenuOpen})=> isMenuOpen ? "100%" : "0"};
  }
`
const NavItem = styled(NavLink)`
  text-decoration:none;
  position:relative;
  font-size:1rem ;
  &::before{
    position: absolute;
    content: "";
    left: 0;
    bottom: -3px;
    width: 80%;
    height: 4px;
    border-radius: 5px;
    background-color: var(--primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.6s;
  }
  &:hover::before{
    transform: scaleX(1);
  }

  @media ${devices.tablet}{
    color:var(--white);
    text-align:center;
  }
`
const HamburgerContainer = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display:none ;
  @media ${devices.tablet}{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:first-child {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '')};
  }

  &:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
  }

  &:last-child {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '')};
  }
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`;
