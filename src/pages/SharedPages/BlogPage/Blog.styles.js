import styled from "styled-components";

export const BlogPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const BlogPageOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4% 8%;
    button{
        margin-top: 5rem;
        align-self: center;
    }
`

export const LatestPostOuterContainer = styled.section`
    padding: 4% 8%;
    h2{
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }
    >p{
        font-size: 1.1rem;
        margin-bottom: 6rem;
    }
`

export const LatestPostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5%;


`