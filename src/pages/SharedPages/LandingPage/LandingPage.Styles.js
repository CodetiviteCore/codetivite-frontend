import styled from "styled-components"
import { SwiperSlide } from "swiper/react"
import { devices } from "../../../utils/MediaQueiyBreakPoints"

export const LandingMainContainer = styled.main`

`
export const LandingModal = styled.div`
    height:fit-content;
    div:first-child{
        width:100%;
        background-color:var(--blue) ;
        display:flex;
        justify-content:space-between ;
    }
    div:last-child{
        padding:50px 70px;
        text-align:center;
        h4{
            font-size:1.3rem;
            margin-bottom:1rem;

        }
     
        button{
            background-color:var(--google-blue);
            margin:2rem auto 0 auto;
            padding:22px 52px;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:20px;
            border-radius: 10px;
            outline:none;
            border:none;
            p{
                color:var(--white);
            }
            &:hover{
                cursor:pointer;
            }
           
        }
    }
`
export const LandingFirstContainer = styled.div`
    display:flex;
    align-items:center;
    gap:27px;
    padding:8%;
    @media ${devices.tablet}{
        flex-wrap:wrap;
        h2{
            width:100%;
            font-size:1.6rem;
            line-height:1;
        }
        p{
            font-size:1rem;
           
        }
        div:last-child{
            display:flex;
            flex-direction:column;
            align-items:center;
            p{
                margin-bottom:0.4rem;
                line-height:1.7;
            }
            button{
                margin:0 auto ;
            }
        }
    }
    div:last-child{

        p{
            margin-bottom:1.5rem;
        }
        
    }

`
export const LandingVideoIllustratorContainer = styled.section`
    height:80vh;
    padding:8%;
`
export const LandingIllustrator = styled.div`
    background-color:#F0F6FF;
    height:inherit;
`
export const LandingWhatWeDo = styled.section`
    padding:8%;


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
    @media ${devices.tablet}{
        p{
            font-size:1rem;
        }
        h3{
            font-size:1.6rem;
        }
    }
`
export const LandingWhatWeDoCard = styled.div`
    width: 18.5rem;
    h4{
        font-size:1.25rem;
        font-weight: 600;
    }
    @media ${devices.tablet}{
        text-align:center;
        h4{
            font-size:1rem;
        }
        P{
            font-size:1rem;
        }
    }
`
export const LandingWhatWeDoCardContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3rem;
    gap:2rem;
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }
`
export const HowToGetStartedContainer = styled.section`
    padding:8%;
    height: fit-content;
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
        @media ${devices.tablet}{
            width:7rem;
            height:9rem;
        }
    }
    img:last-child{
        position:absolute;
        bottom:0;
        left:0;
        transform: scale(-1);
        @media ${devices.tablet}{
            width:7rem;
            height:9rem;
        }
    }
    @media ${devices.tablet}{
        height:100vh;
    }
    
`
export const HowToGetStartedContent = styled.div`
    position: relative;
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media ${devices.tablet}{
        flex-direction: column;
    }
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
    @media ${devices.tablet}{
        max-width:100%!important;
        h3{
            font-size:1.1rem;
        }
        p{
            font-size:1rem;
        }
        button{
            display:none;
        }
    }

`
export const HowToGetStartedCardContainer = styled.aside`
    display:flex;
    flex-direction:column;
    gap: 1rem;
`
export const HowToGetStartedCard = styled.div`
    background-color:var(--white) ;
    padding:6.25%;
    width:34.75rem;
    box-shadow: 3.7987px 3.7987px 94.9675px rgba(0, 0, 0, 0.06);
    transition:all 1s ;
    h5{
        color:${props => props.open ? "var(--landing-card-black)" : "var(--text-black)"} ;
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
    background-color: ${props => props.open ? "var(--gray)" : "var(--primary-light)"};
    display:flex ;
    align-content:center;
    justify-content:center;
    border-radius:50%;
    outline:none;
    border:none;
    p{
        margin:auto;
        font-size:1rem;
        color:${props => props.open ? "var(--gray-black)" : "var(--primary)"};
        font-weight: 600;
    }
`
export const HowToGetStartedCardDetails = styled.p`
    margin-top:1.5rem;
    display:${props => props.open === "open" ? "block" : "none"};
    height:${props => props.open === "open" ? "fit-content" : "0"} ;
    transition: all 1s ;
`

export const CommunityContainer = styled.section`
    padding:8%;
    display:flex;
    justify-content:center;
    gap:35rem;
    height:80vh;
    @media ${devices.tablet}{
        height:fit-content;
        display:block;
        flex-direction:column ;
    }
`
export const CommunityCollaborate = styled.section`
    position:relative;
    width:fit-content;
    @media ${devices.tablet}{
        margin:0 auto;
        height:fit-content;
        padding-bottom:20%;
        display:block;
    }
`
export const CommunityCollaborateDetails = styled.div`
    max-width:36.25rem;
    height:fit-content;
    padding-bottom:10%;
    h3{
        font-size:1.6rem;
        font-weight:700;
    }
    h5{
        font-weight:400;
    }
    p{
        margin-top:0.5rem;
        margin-bottom:2rem ;
    }
    @media ${devices.tablet}{
        margin-top:10%;
        display:flex;
        flex-direction:column ;
    
        p,h5{
            font-size:1rem;
        }
        h3{
            font-size:1.2rem;
        }
        
        button{
            align-self:center;
        }
    }
`
export const AvatarContainer = styled.aside`
    position:absolute;
    top:0;
    left:2rem;
    padding:2rem;
    border-radius:1.2rem;
    width:fit-content;
    background-color:var(--white);
    box-shadow: 3.57055px 3.57055px 89.2638px rgba(0, 0, 0, 0.06);
    &>div{
        display:flex;
        gap:2.3rem;
    }
    &>div:last-child{
        margin-top:1.9rem;
        display:flex;
        justify-content:flex-end;
    }
    h4{
        font-weight:600;
        margin-bottom:1.5rem;
    }
    @media ${devices.tablet}{
        display:block ;
        position: relative;
        left:0;
        bottom:0 ;
        padding:1rem;
        border-radius:1rem;
        margin-top:10rem;
        &>div{
            gap: 1.5rem;
        }

    }
`
export const AvatarElement = styled.div`
    transition:all 1s ease-in-out;
    p{
        text-align:center;
    }
    img:hover{
        transform:scale(1.2) ;
    }
    @media ${devices.tablet}{
        img{
            width:2rem;
            height:2rem;
        }
    }
`
export const AvatarBoxOne = styled.div`
   
`
export const CallContainer = styled.div`
    position:absolute;
    z-index:1;
    top:6rem;
    left:-11rem;
    @media ${devices.tablet}{
        left:-4rem;
        bottom:0rem;
        img{
            width:10rem;
            height:12.6rem;
            object-fit:cover;
        }
    }
`
export const AudioContainer = styled.div`
    position:absolute;
    width: 18.75rem;
    bottom:13rem;
    left:11rem;
    padding:0.62rem;
    display:flex;
    align-items:center;
    gap:10px;
    background-color:var(--white);
    box-shadow: 3.57055px 3.57055px 89.2638px rgba(0, 0, 0, 0.06);
    border-radius: 17.8528px;
    div{
        flex-direction:column;
        gap:3.3px;
    }

    @media ${devices.tablet}{
        width:12rem;
        position:relative;
        padding:0.5rem 0 0.5rem 0.5rem;
        bottom:-1rem;
        left:4rem;
        h5{
            font-size:1rem;
        }
        div{
            p{
                font-size:0.5rem;
            }
        }
    }
`
export const LandingCarouselContainer = styled.section`
    height:50vh;
    align-items:center;
    padding:8%;
    @media ${devices.tablet}{
        height:fit-content; 
        margin-top:2%;
        padding-top:2%;
        display:block !important;
    }
`
export const LandingCarouselElement = styled.div`
    width:80%;
    margin:0 auto;
    h5{
      font-size:1.7rem;
      font-weight:500;
      color:var(--carouselText);
      line-height:1.5;
      text-align: justify;
        text-justify: inter-word;
        margin-bottom:1.5rem;
    }
    h6,p{
        text-align:center;
        margin-bottom:4px;
    }
    @media ${devices.tablet}{
        width:100% ;
        h5{
            font-size:1rem;
        }
    }

`
export const CarouselArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    background-color: var(--primary-light);
    opacity: 0.8;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    color:var(--primary);
    
`
export const PrevArrow = styled(CarouselArrow)`
  left: 20px;
  @media ${devices.tablet}{
        display:none ;
    }
`
export const NextArrow = styled(CarouselArrow)`
  right: 20px;
  @media ${devices.tablet}{
        display:none ;
    }
`
export const Slide = styled(SwiperSlide)`
    margin-top:0.3rem;
`
export const LandingBlogContainer = styled.section`
    padding:8%;
`
export const LandingBlogCard = styled.div`
    width:24.6rem;
    
    img{
        object-fit:cover;
        width:inherit;
    }
    h6{
        font-weight:400;
        margin: 1rem 0;
    }
    h4,p{
        margin-bottom:1rem;
    }
    hr{
        opacity:0.2 ;
    }
    &>div{
        display:flex;
        align-items:center;
        width:fit-content;
        margin-top:1rem;
        gap: 0.6rem;
        div{
            margin-top:1rem;
        }
        h5{
            font-size:1rem;
        }
        p{
            font-size:0.8rem;
        }

    }
    @media ${devices.tablet}{
        width:20rem;
        h4{
            font-size:1rem;
        }
        p{
            font-size:1rem;
        }
    }

`
export const LandingBlogCardContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:inherit;
    @media ${devices.tablet}{
        flex-direction:column;
        align-items:center;
        padding:8% ;
    }
`
export const BlogContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:2rem;
    div{
        max-width:36rem;
        h4{
            font-size:1.76rem;
            font-weight:700;
        }
    }
    @media ${devices.tablet}{
        justify-content:center;
        button{
            display:none;
        }
        h4{
            font-size:1.6rem !important;
        }
        p{
            font-size:1rem;
        }
    }
   
`