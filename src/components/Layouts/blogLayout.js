import React from 'react'
import styled from 'styled-components'
import { BlogMenu } from '../blogMenu/blogMenu';
import { devices } from '../../utils/MediaQueiyBreakPoints';

export const BlogLayout = ({ children }) => {
    return (
        <BlogLayoutContainer>
            <BlogTitleContainer>
                <h5>OUR BLOG</h5>
                <h2>Read All The Latest News In The Tech Space</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </BlogTitleContainer>
            <BlogMenu />

            {children}

        </BlogLayoutContainer>
    )
}

const BlogLayoutContainer = styled.main`
    
`
const BlogTitleContainer = styled.section`
    text-align: center;
    padding-top: 5%;
    h5{
        font-size: 1rem;
        font-weight: 600;
    } 
    h2{
        font-size: 2.5rem;
        font-weight: 700;
    }
    p{
        font-size: 1rem;
        margin-top: 1.25rem;
    }
    @media ${devices.tablet}{
        h5{
            font-size: 0.8rem;
        }
        h2{
            font-size: 1rem;
        }
        p{
            margin-top: 0.2rem;
            font-size: 0.8rem;
        }
    }

`
