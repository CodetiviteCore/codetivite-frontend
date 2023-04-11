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

export const RoadmapLectureCards = ({ title, setIsModalOpen, setCurrentTopic, setLink }) => {
    // const response = getDocument("17Sghj2HHVuSfZTZ9B5Amxa2vyKxw020BcuZPcmc-KUs")
    // console.log(response, "getFromDocs")
    return (
        <CardConatiner>
            <div>
                <RoadmapBookIcon />
                <Title onClick={() => {
                    setCurrentTopic(title)
                    setIsModalOpen(true)
                    setLink(title.resource)
                }}>{title}</Title>
            </div>
            <Lock/>
        </CardConatiner>
    )
}