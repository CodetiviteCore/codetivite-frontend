import styled from "styled-components";

export const CommunityContainer = styled.main`
    height:100%;
    width: auto;
    padding: 2rem 1.4rem;
    overflow-y: scroll !important;
`

export const CommunityChannels = styled.section`
    display: flex;
    gap: 1rem;
    height: auto;
    justify-content: space-between;
`
export const Posts = styled.section`
    flex: 0.6;
    height: 64vh;
    background-color: var(--white);
    overflow-y: scroll;
    padding: 1.25rem;
`