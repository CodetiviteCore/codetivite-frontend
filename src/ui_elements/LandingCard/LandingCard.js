
import styled from "styled-components"
import { devices } from "../../utils/MediaQueiyBreakPoints"


const Card = styled.div`
    background-color:var(--white) ;
    padding:1.25rem 1rem;
    width:34.75rem;
    box-shadow: 3.7987px 3.7987px 94.9675px rgba(0, 0, 0, 0.06);
    transition: height 0.5s ease-in-out;
    border-radius:10px;
    h5{
        color:${props => props.open ? "var(--landing-card-black)" : "var(--text-black)"} ;
    }
    @media ${devices.tablet}{
        width:100%;
        padding:2%;
        width:inherit;
    }

`
const Title = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media ${devices.tablet}{
        h5{
            font-size:0.8rem;
        }
    }
`
const Expand = styled.button`
    width:2.6rem;
    height:2.6rem;
    background-color: ${props => props.open ? "var(--gray)" : "var(--primary-light)"};
    border-radius:50%;
    outline:none;
    border:none;
    color:${props => props.open ? "var(--gray-black)" : "var(--primary)"};
    font-size:1.2rem;
    transition: all 1s ease;
    &:hover{
        cursor: pointer;
        transform:rotate(360deg) ;
    }
    @media ${devices.tablet}{
        width:1.5rem;
        height:1.5rem;
    }
 
`
const CardDetails = styled.p`
    margin-top: 1.5rem;
    height: ${props => props.open === "open" ? "auto" : "0"};
    transform-origin: top;
    transform: scaleY(${props => props.open === "open" ? "1" : "0"}) ;
    opacity:${props => props.open === "open" ? "1" : "0"} ;
    transition: all 0.5s ease-in-out;
    @media ${devices.tablet}{
        font-size:0.8rem;
    }
`
export const LandingCard = ({ title, description, cardState, index, handleCardExpansion }) => {
    return (
        <Card
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
        >
            <Title>
                <h5>{title}</h5>
                <Expand
                    onClick={() => handleCardExpansion()}
                    open={cardState === index ? "open" : null}
                >
                    {cardState === index ? "-" : "+"}
                </Expand>
            </Title>
            <CardDetails open={cardState === index ? "open" : null}>{description}</CardDetails>
        </Card>
    )
}

