import styled from "styled-components";
import { devices } from "../../../utils/MediaQueiyBreakPoints";

export const RoadMapContainer = styled.main`
    height:100%;
    width: auto;
    padding: 2rem 1.4rem;
    overflow-y: scroll !important;
    background-color:#f0f5f4;
    border-left: 1px solid var(--navborders);

`

export const Stats = styled.section`
    display: flex;
    gap: 1rem;
    height: auto;
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }
`
export const PathRoadMapContainer = styled.section`
    height: min-content;
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    @media ${devices.tabletL}{
        flex-wrap:wrap;
    }
`
export const RoadMapPath = styled.aside`
    flex: 0.6;
    height: 64vh;
    background-color: var(--white);
    overflow-y: scroll;
    padding: 1.25rem;
    width: clamp(30rem, 100%, 40rem);
    
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
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }
`
export const RoadMapProjectDetails = styled(PathRoadMapContainer)``

export const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }
`