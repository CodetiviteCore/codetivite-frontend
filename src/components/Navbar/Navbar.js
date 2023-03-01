import React from 'react'
import { useState } from 'react';
import { BlackLogo } from '../../assets/svgs';
import { Button } from '../../ui_elements';
import {
  NavWrapper,
  Logo,
  NavButton,
  NavList,
  NavItem
}
    from "./Navabar.styles"
    export const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      const toggleNav = () => {
        setIsOpen(!isOpen);
      };
    
      return (
        <NavWrapper scrolled={scrolled}>
          <Logo src="logo.svg" />
          <NavButton onClick={toggleNav}>Menu</NavButton>
          <NavList isOpen={isOpen}>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Portfolio</NavItem>
          </NavList>
        </NavWrapper>
      );
    };
    