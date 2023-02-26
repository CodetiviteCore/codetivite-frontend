import React from 'react'
import { useState } from 'react';
import { BlackLogo } from '../../assets/svgs';
import { Button } from '../../ui_elements';
import {
    Nav,
    Logo,
    Burger,
    BurgerLine,
    NavItems,
    NavItem,
    NavLinks
}
from "./Navabar.styles"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            <Nav>
                <Logo to={"#"}>c<span>{<BlackLogo/>}</span>detivite</Logo>
                <Burger onClick={toggleNav}>
                    <BurgerLine isOpen={isOpen} />
                    <BurgerLine isOpen={isOpen} />
                    <BurgerLine isOpen={isOpen} />
                </Burger>
                <NavItems isOpen={isOpen}>
                    <NavItem>
                        <NavLinks to={"#"}>Our community</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"#"}>Clarity test</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"#"}>About us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"#"}>Contact us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"#"}>Our blog</NavLinks>
                    </NavItem>
                </NavItems>
                <Button >Login or Sign UP</Button>
            </Nav>
        </>
    )
}
