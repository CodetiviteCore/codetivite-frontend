import styled from "styled-components";
import { Link } from 'react-router-dom';
import React from 'react';
import { BlogCards } from "../../../../ui_elements/BLogcards/blogCards";

export const BlogComponent = () => {

    const blogData = {
        category: 'news',
        title : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod ',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    };

    return (
        <Container>
            <Header>
                <h2>Our blogpost</h2>
                <Redirect to="/blog">
                <p>See more</p>
                <span>&#8594;</span>
                </Redirect>
            </Header>
            <BlogCards category={blogData.category} title={blogData.title} description={blogData.description} />
        </Container>
    );
};

const Container = styled.aside`
    flex: 0.26 1 0%;
    // float:right;
    // width: 24rem;
    background-color: var(--white);
    padding: 1rem;
    margin-top: 1.5rem;
`

const Header = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        font-size: 1.25rem;
        font-weight: 600;
    }
`
const Redirect = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    p {
        font-size: 1rem;
        color: var(--primary);
        font-weight: 600;
    }
    span {
        font-size: 1.5rem;
        color: var(--primary);
    }
`
