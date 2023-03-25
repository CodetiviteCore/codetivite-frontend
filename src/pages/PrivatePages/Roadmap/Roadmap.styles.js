import styled from "styled-components";

export const RoadMapContainer = styled.main`
    height:100%;
    width: auto;
    padding: 2rem 1.4rem;

`

export const Stats = styled.section`
    display: flex;
    gap: 1rem;
    height: auto;
`
export const PathRoadMapContainer = styled.section`
    height: min-content;
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
`
export const RoadMapPath = styled.aside`
    flex: 0.6;
    height: 64vh;
    background-color: var(--white);
    overflow-y: scroll;
    padding: 1.25rem;
    h2{
        font-size: 1.25rem;
        font-weight: 600;
    }
`
export const RoadMapProjectsToComplete = styled(RoadMapPath)`
    flex:0.36;
    >p{
        font-size: 0.75rem;
        line-height: 1.3;
    }

`