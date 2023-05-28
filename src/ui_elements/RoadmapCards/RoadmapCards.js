import styled from "styled-components"
import { InfoCircle } from "../../assets/svgs"


const CardContainer = styled.div`
    background-color: var(--white);
    height:clamp(5rem, 10vw, 9rem);
    width:100%;
    padding: 11px;
    h3{
        margin: 1.3rem 0;
        font-size: 1.25rem;
        font-weight: 600;
    }
`
const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        gap: 10px;
        align-items:center ;
    }
`
// const InfoDetails = styled.div`
//     width: 100%;
//     display: flex;
//     gap: 4px;
//     align-items: center;
//     h6{
//         font-size: 0.75rem;
//         font-weight: 400;
//     }
//     div{
//         display: flex;
//         align-items: center;
//         gap: 7px;
//         p{
//         color: ${({ improved }) => improved ? "var(--primary)" : "var(--danger)"};
//         font-size: 10px;
//     }
//     }
// `


export const RoadMapCards = ({ icon, title, info, description }) => {
    return (
        <CardContainer>
            <TitleContainer>
                <div>
                    {icon}
                    <p>{title}</p>
                </div>
                <InfoCircle />
            </TitleContainer>
            <h3>{info}</h3>
            {
                description && 
                <p>{()=>description()}</p>
            }
        </CardContainer>
    )
}