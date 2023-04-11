import styled from "styled-components";
import { devices } from '../../../utils/MediaQueiyBreakPoints';

export const AboutUsOuterContainer = styled.main``
export const AboutUsFirstContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:8%;
    div:first-child{
        h2{
            width: 60%;
        }
        p{
            font-weight: 600;
        }
        span{
            font-weight: 700;
            font-size: 2.5rem;
            color: var(--primary);
        }
    }
    @media ${devices.tablet}{
        flex-wrap:wrap;
        div:first-child{
            h2{
                width: 100%;
            }
            span{
                font-size: 1.6rem;
            }
        }
        h2{
            width:100%;
            font-size:1.6rem;
            line-height:1;
            font-size: 1.6rem;
            margin-top: 1rem;
        }
        p{
            font-size:1rem;
           
        }
        div:last-child{
            margin-top: 2rem;
            display:flex;
            flex-direction:column;
            width: 100%;
            p{
                margin-bottom:0.4rem;
                line-height:1.7;
                width: 100% !important;
                font-size: 1rem;
            }
        }
    }
    div:last-child{
        p{
            margin-bottom:1.5rem;
            max-width:400px;
        }
        
    }
    
`
export const AboutUsSecondContainer = styled.section`
    padding:8%;
    display: flex;
    align-items:center;
    justify-content: center;
    div{
        position: relative;
        ::before{
            content: "";
            background-color: var(--primary);
            width: 20%;
            height: 40%;
            position: absolute;
            z-index: -4;
            top: -5%;
            left: -3%;
        }
        ::after{
            content: "";
            background-color: var(--primary);
            width: 20%;
            height: 40%;
            position: absolute;
            z-index: -4;
            bottom: -5%;
            right: -3%;
        }
    }
    img{
        position: relative;
        width: 100%;
        height: 100%;

    }

`

export const WhatWeDo = styled.section`
    padding: 8%;

`
export const WhatWeDoContainer = styled.div`
    p{
        text-align:center;
        font-weight: 600;
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
export const WhatWeDoCard = styled.div`
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


export const WhatWeDoCardContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3rem;
    gap:2rem;
    @media ${devices.tablet}{
        flex-wrap:wrap;
    }

`
export const TeamContainer = styled.section`
    background-color: var(--pure-white);

`
export const TeamHeading = styled.div`
    padding: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6{
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    h5{
        font-weight: 700;
        font-size: 1.75rem;
    }
    p{
        width: 50%;
    }
    button{
        margin-top: 1.5rem;
    }

    @media ${devices.tablet} {
        flex-direction: column;
        gap:0.8rem;
        align-items: flex-start;
        h6{
            margin-bottom: 0;
        }
        button{
            margin-top: 0.8rem;
        }
        p{
            width: 100%;
            font-size: 1rem;
        }
    }
`
export const TeamGalleryContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    padding: 0 0 8% 8%;

`
export const TeamGallery = styled.div`
    overflow-x: scroll;
    overflow-y:hidden;
    display: flex;
    width: 100%;
`

export const OurValuesContainer = styled.section`
    position: relative;
    padding: 4% 8%;
    >img{
        position: absolute;
        object-fit: contain;
        bottom: 0;
        left: 0;
        transform: scale(-1);
        z-index: 0;
    }
    @media ${devices.tablet} {
        img{
            z-index: -1;
        }
    }

`

export const ValuesContainer = styled.div`
    display: flex;
    justify-content: center;
    @media ${devices.tablet} {
        flex-wrap: wrap;
    }
`

export const ValuesCard = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    h6, p{
        margin-top: 1rem;
    }
    p{
        max-width: 80%;
        text-align: center;
    }
    @media ${devices.tablet} {
        h6,p{
            font-size: 1rem;
        }
    }

`
export const OurValueHeader = styled.div`
    p{
        font-weight: 600;
        font-size: 1rem;
        text-align: center;
      
    }
    h4{
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    @media ${devices.tablet} {
        p{
            font-size: 1rem;
        }
        h4{
            font-size: 1.6rem;
        }
    }
`
