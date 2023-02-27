import styled from "styled-components"

export const LandingMainContainer = styled.main`

`
export const LandingFirstContainer = styled.div`
    display:flex;
    align-items:center;
    gap:27px;
    padding:78px 122px;

    div:last-child{
        p{
            margin-bottom:24px;
        }
    }
`
export const LandingVideoIllustratorContainer = styled.section`
    height:80vh;
    padding: 62px 122px;
`
export const LandingIllustrator = styled.div`
    background-color:#F0F6FF;
    height:inherit;
`
export const LandingWhatWeDo = styled.section`
    padding:75px 122px 122px 100px;


`
export const LandingWhatWeDoContainer = styled.div`

    p{
        text-align:center;
    }
    h3{
        font-size:28px;
        text-align: center;
        margin:0 auto ;
        max-width:580px;
    }
`
export const LandingWhatWeDoCard = styled.div`
    width: 18.5rem;
    h4{
        font-size:1.25rem;
        font-weight: 600;
    }
`
export const LandingWhatWeDoCardContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3rem;
    gap:2rem;
`
export const HowToGetStartedContainer = styled.section`
    padding:5.5rem 7.6rem;
    height: 60vh;
    position:relative;

`
export const HowToGetStartedBackground = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:60vh;
    z-index:-1;
    div{
        position:relative ;
        width:100%;
    }
    img:first-child{
        position:absolute;
        top:0;
        right:0;
    }
    img:last-child{
        position:absolute;
        bottom:0;
        left:0;
        transform: scale(-1);
    }
`
export const HowToGetStartedContent = styled.div`
    position: relative;
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const HowToGetStartedDetails = styled.div`
    max-width:36.5rem;
    h3{
        font-size:1.75rem;
        font-weight:700;
        margin-bottom:1.3rem;
    }
    div{
        margin-top:2rem;
        display:flex;
        gap:1.75rem;
    }

`
export const HowToGetStartedCardContainer = styled.aside`
    display:flex;
    flex-direction:column;
    gap: 1rem;
`
export const HowToGetStartedCard = styled.div`
    background-color:var(--white) ;
    padding:1.25rem 1rem;
    width:34.75rem;
    box-shadow: 3.7987px 3.7987px 94.9675px rgba(0, 0, 0, 0.06);
    transition:all 1s ;
    h5{
        color:${props=>props.open ? "var(--landing-card-black)" : "var(--text-black)"} ;
    }
`
export const HowToGetStartedTitle = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
`
export const LandingExpand = styled.button`
    width:2.6rem;
    height:2.6rem;
    background-color: ${props=>props.open ? "var(--gray)" : "var(--primary-light)" };
    display:flex ;
    align-content:center;
    justify-content:center;
    border-radius:50%;
    outline:none;
    border:none;
    p{
        margin:auto;
        font-size:1.2rem;
        color:${props => props.open ? "var(--gray-black)" : "var(--primary)"};
        font-weight: 600;
    }
`
export const HowToGetStartedCardDetails = styled.p`
    margin-top:1.5rem;
    display:${props => props.open==="open" ? "block" : "none"};
    height:${props => props.open === "open" ? "fit-content" : "0"} ;
    transition: all 1s ;
`

export const CommunityContainer = styled.section`
    padding:2.8rem 7.6rem;
`
export const CommunityCollaborate = styled.section`
    position:relative;
`
export const CommunityCollaborateDetails = styled.div`

`
export const AvatarContainer = styled.aside`
    padding:2rem;
    background-color:red;
    border-radius:1.2rem;
    width:fit-content;
    &>div{
        display:flex;
        gap:2.3rem;
    }
    &>div:last-child{
        margin-top:1.9rem;
    }
    h4{
        font-weight:600;
        margin-bottom:1.5rem;
    }
`
export const AvatarElement = styled.div`
     p{
        text-align:center;
    }
`
export const AvatarBoxOne = styled.div`
   
`
export const CallContainer = styled.div`

`
export const AudioContainer = styled.div`

`