import styled, { css } from "styled-components"
import { devices } from "../../utils/MediaQueiyBreakPoints"


export const FooterContainer = styled.footer`
    padding: 51px 122px 30px 122px;
    position:relative ;
    color: var(--white);
    p{
        color: var(--white);
    }
`
export const FooterImageContainer = styled.div`
    width: 21.18rem;
    height:21.93;
    position: relative;
    @media ${devices.tablet} {
        display:none ;
    }
`
export const FooterImage = styled.img`
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`
export const FooterClips = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    background-color: var(--white);
    position:absolute;
    ${props => props.portfolio && css`
        top:89px;
        left:-90px;
    `}
    ${props => props.roadmap && css`
        top:21px;
        right:-70px;
    `}
    ${props => props.leaderboard && css`
        bottom:26px;
        right:-70px;
    `}
    padding: 0.68rem 1rem;
    border-radius:6.25rem;
`
export const FooterIconBody = styled.div`
    width:2.12rem;
    height:2.12rem;
    background-color: var(--footer-blue);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
`
export const FooterClipTitle = styled.h6`
    font-size: 1rem;
    font-weight:600;
    color:var(--heading-black) ;
`
export const FooterBackground = styled.div`
    position: absolute;
    z-index:-2;
    background-color:var(--blue) ;
    height:100%;
    width:100%;
    top:0;
    left:0;
    img:first-child{
        position:absolute;
        bottom:0;
        width:450px;
        height:450px;
        object-fit:contain;
        object-position:left;

        @media ${devices.tablet}{
            width:200px;
            height:200px;
        }
    }
    img:last-child{
        position: absolute;
        top:0;
        right:0;
        transform: rotate(180deg) ;
        width:450px;
        height:450px;
        object-fit:contain;
        object-position:left;
        
        @media ${devices.tablet}{
            width:200px;
            height:200px;
        }
        
    }

`
export const FooterDetails = styled.div`
    position:relative;
    z-index:2;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:86px;
`
export const FooterGetStarted = styled.div`
    max-width:36.5rem;
    h2{
        font-size:1.75rem;
        width:36.5rem;
        @media ${devices.tablet} {
            font-size:1.1rem ;
            width:350px;
        }
    }
    p{
        margin-top:0.5rem;
        max-width:36.5rem;
        @media ${devices.tablet} {
            font-size:0.66rem;
        }
    }
`
export const FooterButtonContainer = styled.div`
    display:flex;
    align-items:center;
    gap:24px;
    margin-top:2rem;
`
export const FooterLinksContainers = styled.section`
    display:flex;
    justify-content:space-between ;
    /* align-items: center; */
    margin-top:63px;
    @media ${devices.tablet}{
        width:320px;
        flex-direction:column;
        margin-left: -100px;
    }
    &>section{
        display:flex;
        gap:92px;
        @media ${devices.tablet}{
            gap:110px;
            margin-top:23px ;
        }
    }
    &>section:last-child{
        @media ${devices.tablet}{
            justify-content:space-between ;
            margin-top:41px;
        }
    }
    
`
export const FootLinksLogoDetails = styled.div`
    h1{
        font-size:1.7rem;
        color: var(--white);
    }
    p{
        @media ${devices.tablet}{
            font-size:0.83rem;
        }
    }
    width: 28.8rem;
    @media ${devices.tablet}{
        width:inherit;
    }
`  
export const FooterLinkList = styled.ul`
    list-style: none;
`
export const FooterLinkItem = styled.li`
    color:var(--white);
    margin-top:1rem;
    @media ${devices.tablet}{
        font-size: 0.86rem ;
    }
`
export const CopyRight = styled.p`
    text-align:center;
    margin-top:3.125rem ;
    @media ${devices.tablet}{
        font-size:12px;
        width:205px;
    }
`