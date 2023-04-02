import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../../utils/MediaQueiyBreakPoints';

export const BlogMenu = () => {
  return (
      <BlogMenuContainer>
          <MenuLinks>View all</MenuLinks>
          <MenuLinks>News</MenuLinks>
          <MenuLinks>Product</MenuLinks>
          <MenuLinks>Tech</MenuLinks>
          <MenuLinks>Software</MenuLinks>
      </BlogMenuContainer>
  )
}


const BlogMenuContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    @media ${devices.tablet}{
        gap:1rem;
    }
`
const MenuLinks = styled(NavLink)`
    font-size: 1rem;
    font-weight: 600;
    @media ${devices.tablet}{
        font-size: 0.8rem;
    }
`