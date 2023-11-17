import styled from "styled-components";
import { devices } from '../../../utils/MediaQueiyBreakPoints';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.main`
    height:100%;
    overflow-y:scroll;
    padding: 2rem 1.4rem;
    background-color:#f0f5f4;
    ;
`
export const Stats = styled.section`
    display: flex;
    gap: 1rem;
    height: auto;
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }
`

export const JumpBackInTaskSection = styled.section`
    height: min-content;
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    @media ${devices.tabletL}{
        flex-wrap:wrap;
    }
`

export const JumpBackInContainer = styled.div`
    flex: 0.6;
    height: 64vh;
    background-color: var(--white);
    overflow-y: scroll;
    padding: 1.25rem 2rem;
    width: clamp(30rem, 100%, 40rem);
    
    h2{
        font-size: 1.25rem;
        font-weight: 600;
    }
    >div{
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
`
export const JumpBackLink = styled(Link)`
    display:flex;
    gap:0.5rem ;
    p,span{
        color: var(--primary);
        font-weight:600;
    }
    span{
        font-size: 1.5rem;
    }
`
export const RoadMapTask = styled.aside`
    flex:0.36;
    background-color:var(--white);
    padding:1rem;
    >div{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    h2{
        font-size: 1.25rem;
        font-weight: 600;
    }
    
    >p{
        font-size: 0.75rem;
        line-height: 1.3;
    }
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }
`