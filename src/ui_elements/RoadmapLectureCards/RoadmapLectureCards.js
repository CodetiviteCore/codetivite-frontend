
import styled from "styled-components"
import { Lock, RoadmapBookIcon, Unlock } from "../../assets/svgs"
import { useApiGet } from '../../custom-hooks/useApiGet';
import RoadmapServices from "../../services/roadmapServices";
import { useEffect } from 'react';

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
    :hover{
        cursor:pointer;
    }
`
const Title = styled.p`
    font-weight: 600;
   
`

export const RoadmapLectureCards = ({
    title,
    setCurrentTopic,
    setResourceDoc,
    resource,
    setCurrentId,
    projectId,
    completedSyllabus,
    completed,
    setCompleted
}) => {

    const { data: document, refetch: fetchDoc } = useApiGet(`${title} document`, () => RoadmapServices.getDocument(resource))

    const getDoc = () => {
        fetchDoc()
        document && setResourceDoc(document.data)
    }

    useEffect(() => {
        completedSyllabus?.projectsCompleted
            .forEach((module) => {
                if (module?.projectId === projectId) {
                    setCompleted(true)
                }
            })
    }, [completedSyllabus, projectId, setCompleted])

    return (
        <CardConatiner
            onClick={() => {
                setCurrentTopic(title)
                // setIsModalOpen(true)

                setResourceDoc()
                setCurrentId(projectId)
                getDoc()
            }}
        >
            <div>
                <RoadmapBookIcon />
                <Title>{title}</Title>
            </div>
            {
                completed ? <Unlock /> : <Lock />
            }
        </CardConatiner>
    )
}