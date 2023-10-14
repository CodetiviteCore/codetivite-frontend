import styled from "styled-components"
import { Button } from "../../../ui_elements"
import { devices } from './../../../utils/MediaQueiyBreakPoints';

export const PrefrenceContainer = styled.main`
    height:100vh;
    display:flex;
    flex:1;
    @media ${devices.tablet}{
        height:100%;
    }

`
export const PreferenceDetails = styled.form`
    flex:0.5;
    padding:2.6rem;
    div{
        width:fit-content;
    }
    @media ${devices.tablet}{
        width:100% ;
        flex:1;
    }

`
export const Save = styled(Button)`
    margin-top:10%;
`
export const PreferenceDashboard = styled.aside`
    flex:0.5 ;
    background-color: var(--primary) ;
    padding:2.6rem 0 0 2.6rem;
    position:relative;
    img{
        position:absolute;
        bottom:0;
        right:0;
        object-fit:contain;
        width:70%;
    }
    @media ${devices.tablet}{
        display:none;
    }

`
export const PreferenceDetailsHeader = styled.div`
    h1{
        font-size:2rem;
        margin-bottom:0;
    }
    p{
        margin-top: 0.5rem;
        font-size:1rem ;
    }
`
export const PreferenceCardContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-top:1.6rem;
    gap:2rem;
    @media ${devices.tablet}{
        width:100%;
    }
`
export const PreferencDashboardeDetails = styled.aside`
    h2{
        font-size:2.2rem;
        color:var(--white);
        width:50%;
    }
    p{
        margin-top:0.5rem;
        width:80%;
        font-size:1rem;
        color:var(--white);
    }

`

export const CollectDetails = styled.div`
    width:100% !important;
    input{
        margin-bottom:1rem;
    }
`