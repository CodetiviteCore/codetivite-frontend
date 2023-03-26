import styled from "styled-components"
import { Lock, RoadmapBookIcon } from "../../assets/svgs"
import { Link } from 'react-router-dom';

const CardConatiner = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    background-color: var(--deep-white);
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;
    >div{
        display: flex;
        gap: 10px;
    }
`
const Title = styled(Link)`
    
`

export const RoadmapLectureCards = ({title}) => {
    return (
        <CardConatiner>
            <div>
                <RoadmapBookIcon />
                <Title>{title}</Title>
            </div>
            <Lock/>
        </CardConatiner>
    )
}