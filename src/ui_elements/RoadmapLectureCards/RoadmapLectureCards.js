
import styled from "styled-components"
import { Lock, RoadmapBookIcon, Unlock } from "../../assets/svgs"
import { useApiGet } from '../../custom-hooks/useApiGet';
import RoadmapServices from "../../services/roadmapServices";
import { useEffect } from 'react';
import { useState } from 'react';

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
    setCurrentTopic,
    setResourceDoc,
    resource,
    setCurrentId,
    projectId,
    completedSyllabus
}) => {

    const [completed, setCompleted] = useState(false)

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
    }, [completedSyllabus, projectId])

    return (
        <CardConatiner>
            <div>
                <RoadmapBookIcon />
                <Title onClick={() => {
                    setCurrentTopic(title)
                    // setIsModalOpen(true)
                    setResourceDoc()
                    setCurrentId(projectId)
                    getDoc()
                }}>{title}</Title>
            </div>
            {
                completed ? <Unlock /> : <Lock />
            }
        </CardConatiner>
    )
}