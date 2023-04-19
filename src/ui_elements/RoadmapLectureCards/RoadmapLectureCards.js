
import styled from "styled-components"
import { Lock, RoadmapBookIcon } from "../../assets/svgs"
import { useApiGet } from '../../custom-hooks/useApiGet';
import RoadmapServices from "../../services/roadmapServices";
import { useNavigate } from 'react-router-dom';

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

export const RoadmapLectureCards = ({
    title,
    setIsModalOpen,
    setCurrentTopic,
    setResourceDoc,
    resource,
    resourceDoc
}) => {

    const { data: document, refetch: fetchDoc } = useApiGet(`${title} document`, () => RoadmapServices.getDocument(resource))
    console.log(resource, "backend resource")

    const getDoc = () => {
        fetchDoc()
        document && setResourceDoc(document.data)
    }
    return (
        <CardConatiner>
            <div>
                <RoadmapBookIcon />
                <Title onClick={() => {
                    setCurrentTopic(title)
                    // setIsModalOpen(true)
                    setResourceDoc()
                    getDoc()
                }}>{title}</Title>
            </div>
            <Lock />
        </CardConatiner>
    )
}