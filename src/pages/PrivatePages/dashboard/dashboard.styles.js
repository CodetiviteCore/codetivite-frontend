import styled from "styled-components";

export const DashboardContainer = styled.main`
    h6,span,p{
        color: var(--white);
    }
    p{
        font-size:1.2rem ;
    }
`

export const DashboardHeader = styled.section`
    background-color:var(--primary);
    height:35vh;
    width:100%;
    color:var(--white) ;
    padding: 3%;
`
export const DashboardWelcomeBack = styled.div`
    span{
        font-weight:800;
    }
    h6{
        font-weight:400;
    }
    h6,span{
        font-size:2.5rem;
    }
`
export const DashboardOverview = styled.div`
    margin-top:3%;
    h6{
        font-size:1.5rem;
        font-weight:600;
    }

`
export const Overview = styled.div`
    display:flex;
    gap:4%;
`
export const SkillDiv = styled.div`
    padding:10px;
    width:fit-content;
    background-color:var(--dashboard-primary-light);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
`
export const SkillDesDiv = styled.div`

`
export const SkillDetails = styled.div`
    display:flex;
    gap:10px;
`