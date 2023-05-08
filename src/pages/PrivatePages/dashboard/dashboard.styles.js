import styled from "styled-components";
import { SkillIcon, Badge } from "../../../assets/svgs";

export const DashboardContainer = styled.main`
    height:100%;
    overflow-y:scroll;
    padding-bottom:4% ;
    h6,span,p{
        color: var(--white);
    }
    p{
        font-size:1.2rem ;
    }
    background-color:var(--white) ;
`
export const Skill = styled(SkillIcon)`
    border-radius:50%;
    width:3rem;
    height:3rem;
`
export const BadgeTag = styled(Badge)`
    border-radius:50%;
    width:3rem;
    height:3rem;
`

export const DashboardHeader = styled.section`
    background-color:var(--primary);
    height:fit-content;
    color:var(--white) ;
    padding: 3%;
    display:flex;
`
export const DashboardWelcomeBack = styled.div`
    span{
        font-weight:800;
    }
    h6{
        font-weight:400;
        margin-bottom:0.7rem;
    }
    h6,span{
        font-size:2.5rem;
    }
`
export const DashboardOverview = styled.div`
    /* margin-top:20%; */
    h6{
        font-size:1.5rem;
        font-weight:700;
        margin-bottom:1rem;
    }

`
export const Overview = styled.div`
    display:flex;
    gap:4%;
`
export const SkillDiv = styled.div`
    padding:20px;
    width:fit-content;
    background-color:var(--dashboard-primary-light);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;

`
export const SkillDesDiv = styled.div`
    p:last-child{
        font-weight: 700;
    }
`
export const SkillDetails = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`
export const ImageContainer = styled.div`
    width:25rem;
    height:25rem;
    margin-right:20% ;
    img{
        width:inherit;
        height:inherit;
        object-fit:cover;
    }
`
export const DashboardDetailsContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:10%;
    justify-content:center;
`
export const DashboardInfoGraphics = styled.section`
    height:50vh;
    padding: 0 3%;
    display:flex;
    /* justify-content:space-between; */
`