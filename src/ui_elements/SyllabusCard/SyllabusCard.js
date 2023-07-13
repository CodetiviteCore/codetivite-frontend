import styled from "styled-components";
import { LockUnlocked } from "../LockUnlock/LockUnlocked";
import { useApiGet } from '../../custom-hooks/useApiGet';
import RoadmapServices from '../../services/roadmapServices';
import { useEffect } from 'react';
import { useState } from 'react';


export const SyllabusCard = ({
    icon,
    title,
    setResourceDoc,
    resource,
    setCurrentId,
    projectId,
    completedSyllabus,
    setMakeRequest,
    setShowQuill,
    isModuleComplete,
    setIsModuleComplete
}) => {

    const [completed, setCompleted] = useState(false)
    const [isActive, setIsActive] = useState(false)
    console.log(isActive, "isActive")


    const { data: document, refetch: fetchDoc } = useApiGet(
        `${title} document`,
        () => RoadmapServices.getDocument(resource)
    );

    const getDoc = () => {
        fetchDoc();
        setMakeRequest(true);
    };

    useEffect(() => {
        completedSyllabus?.projectsCompleted.forEach((module) => {
            if (module?.projectId === projectId) {
                setCompleted(true);
                setIsModuleComplete(true);
            }
            else if (module?.projectId === projectId && isActive) {
                setIsModuleComplete(true);
            }
        });
    },
        [
            completedSyllabus,
            isActive,
            projectId,
            setCompleted,
            completed,
            setIsModuleComplete
        ]
    );

    // useEffect(() => {
    //     completedSyllabus?.projectsCompleted.forEach((module) => {
    //         if (module?.projectId === projectId) {
    //             setCompleted(true);
    //             setIsModuleComplete(true);
    //         }
    //         else if (module?.projectId === projectId && isActive) {
    //             setIsModuleComplete(true);
    //         }
    //     });
    // }, [])

    useEffect(() => {
        if (document) {
            setResourceDoc(document?.data);
            setShowQuill(true)
        }
    }, [document, setResourceDoc, setShowQuill]);

    return (
        <CardContainer
            onClick={() => {
                setShowQuill(false)
                getDoc();
                setCurrentId(projectId);
                setIsActive(true)
                setIsModuleComplete(false)
            }}
        >
            <ContentContainer>
                <BookBackground>{icon}</BookBackground>
                <CardDetails>
                    <div>
                        <h3>{title ? title : 'Create a table using Auto Layout...'}</h3>
                        <p>Table and Grid systems</p>
                    </div>

                    <LockUnlocked
                        complete={completed}
                    />
                </CardDetails>
            </ContentContainer>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    background-color:var(--dashboardBackground);
    width:100%;
    border-radius:0.8rem;
    padding:8px;
    margin:1rem 0 ;

    &:hover{
        cursor: pointer;
    }

`
const ContentContainer = styled.div`
    display: flex;
    align-items:center;
    width:100%;
    gap: 8px;

`
const CardDetails = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    h3{
        font-size:0.9rem;
        font-weight:500;
    }
    p{
        font-size:0.8rem;
        color:var(--sidemenu-text);
    }
`
// const SyllabusState = styled.div`
//     background-color:var(--locked);
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     gap:5px;
//     height: 1.2rem;
//     padding: 0.2rem 0.5rem;
//     margin-right:0.4rem;
//     p{
//         font-size:1rem;
//         color:var(--danger);
//         font-weight:600;
//     }
// `
const BookBackground = styled.div`
    background-color:var(--unlocked);
    width: 3.6rem;
    height:3.6rem;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
`