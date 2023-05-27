import React, {
    useState,
    useEffect
} from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import {
    useParams,
    useNavigate,
    useLocation
} from "react-router-dom";
import styled from "styled-components"
import {
    Button,
    RoadmapLectureCards
} from "../../../ui_elements";
import {
    RoadMapContainer,
    Stats,
    PathRoadMapContainer,
    RoadMapPath,
    RoadMapProjectsToComplete
} from './Roadmap.styles';
import { CompleteProjectCard } from "../../../ui_elements";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


//avtar imports
import Tina from "../../../assets/images/tima.png"
import Toks from "../../../assets/images/toks.png"
import Tunji from "../../../assets/images/tunji.png"
import Sophia from "../../../assets/images/sophia.png"
import { RoadmapBookIcon } from "../../../assets/svgs";
import { useSelector } from "react-redux";
import { useApiGet } from "../../../custom-hooks/useApiGet";
import RoadmapServices from "../../../services/roadmapServices";
import { selectUser } from "../../../Redux store/auth/auth.selector";
import { useApiPost } from "../../../custom-hooks/useApiPost";
import { ToastContainer, toast } from "react-toastify";
import { Puff } from 'react-loader-spinner';
import { formatProgressValue } from "../../../utils/constants";




const RoadMapDetails = styled(RoadMapContainer)`
    overflow-y: scroll !important;
    background-color: var(--deep-white);
`
const Navigation = styled(Stats)`
    justify-content: space-between;
    
    div{
        display: flex;
        gap:10px;
        p{
            font-size: 1.25rem;
            font-weight: 600;
        }
        p:first-child{
            transition: all .5s ease;
            :hover{
                cursor: pointer;
                transform: scaleX(1.5);
            }
        }
    }
`
const DetailsContainer = styled(PathRoadMapContainer)`
`
const Details = styled(RoadMapPath)`
    height:70vh;

`
const Progress = styled(RoadMapProjectsToComplete)`
    background-color: transparent;
    padding: 0;
    overflow-y: hidden;
    height: fit-content;
`
const CircularProgressConatiner = styled.div`
    background-color: var(--white);
    width: auto;
    padding: 1.5rem;
`
const CircularProgress = styled.div`
    width: 13.25rem;
    height: 13.25rem;
    margin:0 auto;
`
const OtherUsers = styled.div`
    display: flex;
    width: 16rem;
    margin: 2rem auto;
    align-items: center;
    justify-content: space-between;
    >p{
        font-weight: 600;
    }
    >div{
        display: flex;
        position: relative;
        width: fit-content;
        max-width: 30%;
        img{
            width: 2rem;
            height: 2rem;
            object-fit: contain;
            position: relative;

            :nth-child(1){
                z-index: 1;
            }
            :nth-child(2){
                z-index:2;
                left: -1.2rem;
            }
            :nth-child(3){
                z-index:2;
                left: -2.3rem;
            }
            :nth-child(4){
                z-index:2;
                left: -3.5rem;
            }
        }
        div{
            min-width:2rem !important;
            min-height: 2rem !important;
            display: flex;


            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--deep-white);
            position: relative;
            left: -4.4rem;
            z-index: 2;
            p{
                font-size: 0.7rem;
                font-weight: 800;
            }
        }
    }
`
const ProjectsDue = styled(RoadMapProjectsToComplete)`
    width: auto;
    background-color: var(--white);
    height:25rem;
    margin-top: 1.25rem;
    overflow-y:scroll ;
    >div{
        background-color: var(--white);
        position:sticky;
        margin-bottom:2rem ;
        h2{
            font-size:1.2rem;
            font-weight:600;
        }
        p{
            font-size:0.8rem;
            line-height:1.2 ;
        }
    }

`

const DetailsModal = styled.div`
    position:relative ;
    height: fit-content;
    max-width:inherit;
    background-color: var(--white);
    padding: 1.5rem;
    display:flex;
    align-items:center;
    flex-direction:column;

    button{
        margin-top:2rem;
        width: 25rem;
        height:4rem;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor: ${({ primary }) => primary ? "pointer" : "not-allowed"} !important;
    }
    
`
const DetailsModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    height:70px !important;
    position:sticky;
    top:-20px;
    left:0;
    background-color:var(--white);
    z-index:5;
    >p{
        font-size: 24px;
        font-weight: lighter;
        :hover{
            cursor: pointer;
        }
    }
    >div{
        display: flex;
        gap:10px;
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`

const DocumentsDisplay = styled.div`
    overflow: auto;
    height:90%;
    /* overflow-x: hidden; */
    
`




const RoadmapDetails = () => {
    const { level } = useParams()
    const navigate = useNavigate()
    const { state } = useLocation()
    const [currentTopic, setCurrentTopic] = useState([])
    const [resoureDoc, setResourceDoc] = useState(null)
    const [currentId, setCurrentId] = useState("")
    const [percentageValue, setPercentageValue] = useState("")
    const [completed, setCompleted] = useState(false)
    const { careerPath } = useSelector(selectUser)



    const avatars = [
        Tina,
        Toks,
        Tunji,
        Sophia
    ]


    const onUpdateSyllabuSuccess = (data) => {
        toast.success(`Marked as complete!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        }
        )
    }
    const onUpdateSyllabusError = () => {
        toast.error(`Failed to update, please check your network`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        }
        )
    }

    const {
        data: projectsResponse,
        // isFetching: fetchingProjectsDue,
        // isLoading: loadingProjectsDue
    } = useApiGet("projects due", () => RoadmapServices.getProjectsDueForSyllabus(
        careerPath,
        state?.level
    ))

    const {
        data: completedSyllabus
    } = useApiGet(
        "Completed syllabus state",
        RoadmapServices.getCompletedSyllablus,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false
        }
    )
    const { data: progressPercentage } = useApiGet(
        "Progress percentage",
        RoadmapServices.getProgressPercentage,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false
        }
    )
    const {
        mutate: completeModule,
        isLoading: isUpdatingSyllabus,

    } = useApiPost(
        RoadmapServices.updateSyllablus,
        "complete module",
        onUpdateSyllabuSuccess,
        onUpdateSyllabusError
    )

    useEffect(() => {
        if (progressPercentage?.progress) {
            const fromattedValue = formatProgressValue(progressPercentage?.progress)
            setPercentageValue(fromattedValue)
        }
    }, [progressPercentage])



    return (
        <RoadMapDetails>
            <Navigation>
                <div>
                    <p onClick={() => navigate(-1)}>&#8592;</p>
                    <p>{level} Roadmap</p>
                </div>
                <Button>Complete and earn badge</Button>
            </Navigation>
            <DetailsContainer>
                <Details>

                    {
                        resoureDoc ?
                            <DetailsModal>
                                <DetailsModalHeader>
                                    <div>
                                        <RoadmapBookIcon />
                                        <p>{currentTopic}</p>
                                    </div>
                                    <p onClick={() => setResourceDoc("")}>&#10006;</p>
                                </DetailsModalHeader>
                                <DocumentsDisplay>
                                    <ReactQuill
                                        value={resoureDoc}
                                        readOnly={true}
                                        modules={{ toolbar: false }}
                                    />
                                </DocumentsDisplay>
                                <Button primary={!completed} disabled={completed} onClick={() => completeModule({
                                    roadmap: `${careerPath}`,
                                    skillLevel: `${level === "Fresher" ? "junior" : level === "Entry-Level" ? "entryLevel" : level}`,
                                    projectId: `${currentId}`
                                })}>
                                    {
                                        isUpdatingSyllabus ?
                                            <Puff
                                                height="40"
                                                width="40"
                                                radius={1}
                                                color="var(--white)"
                                                ariaLabel="puff-loading"
                                            />
                                            :
                                            "I have completed the syllable and task"
                                    }
                                </Button>
                            </DetailsModal>
                            :
                            state?.item.map((item, index) =>
                                <RoadmapLectureCards
                                    key={index}
                                    title={item?.title}
                                    resource={item?.resource}
                                    projectId={item?.projectId}
                                    setCurrentId={setCurrentId}
                                    completedSyllabus={completedSyllabus}
                                    // setIsModalOpen={setIsModalOpen}
                                    setCurrentTopic={setCurrentTopic}
                                    setResourceDoc={setResourceDoc}
                                    resourceDoc={resoureDoc}
                                    completed={completed}
                                    setCompleted={setCompleted}
                                />)
                    }

                </Details>
                <Progress>
                    <CircularProgressConatiner>
                        <CircularProgress>
                            <CircularProgressbar
                                value={percentageValue || 0}
                                text={"0%" || `${percentageValue}%`}
                                styles={{
                                    text: {
                                        // Text color
                                        fill: 'var(--progres-bar-blue)',
                                        // Text size
                                        fontSize: '16px',
                                        fontWeight: 800,
                                        fontFamily: "'Red Hat Display', sans-serif"
                                    },
                                    trail: {
                                        // Trail color
                                        stroke: 'var(--trail)',
                                    },
                                    path: {
                                        // Path color
                                        stroke: `var(--progres-bar-blue)`,
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',
                                        // Customize transition animation
                                        transition: 'all 1.5s ease-out',
                                        // Rotate the path
                                        // transform: 'rotate(0.25turn)',
                                        transformOrigin: 'center center',
                                    },
                                }}
                            />
                        </CircularProgress>
                        <OtherUsers>
                            <div>
                                {
                                    avatars.map((avatar) => <img src={avatar} alt="avataer" />)
                                }
                                <div>
                                    <p>+201</p>
                                </div>
                            </div>
                            <p>have passed this stage</p>

                        </OtherUsers>

                    </CircularProgressConatiner>
                    <ProjectsDue>
                        <div>
                            <h2>Projects due for this syllabus</h2>
                            <p>We have curated detailed projects to help you learn better through practice.
                                Before the end of this roadmap you will be able to complete the projects below.
                            </p>
                        </div>

                        {
                            projectsResponse?.projectsDue?.map((project, index) =>
                                <CompleteProjectCard
                                    project={project}
                                    index={index}
                                />
                            )
                        }

                    </ProjectsDue>
                </Progress>
            </DetailsContainer>
            <ToastContainer />
        </RoadMapDetails>
    )

}
export default RoadmapDetails