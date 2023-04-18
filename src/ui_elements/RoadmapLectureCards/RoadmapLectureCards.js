import styled from "styled-components"
import { Lock, RoadmapBookIcon } from "../../assets/svgs"

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
const Title = styled.p`
    font-weight: 600;
    :hover{
        cursor:pointer;
    }
`

export const RoadmapLectureCards = ({ title, setIsModalOpen, setCurrentTopic, setLink, setResourceDoc, resource }) => {
    
    const 

    return (
        <CardConatiner>
            <div>
                <RoadmapBookIcon />
                <Title onClick={() => {
                    setCurrentTopic(title)
                    setIsModalOpen(true)
                    setLink(title?.resourceUrl)
                    setResourceDoc(resource)
                }}>{title}</Title>
            </div>
            <Lock/>
        </CardConatiner>
    )
}