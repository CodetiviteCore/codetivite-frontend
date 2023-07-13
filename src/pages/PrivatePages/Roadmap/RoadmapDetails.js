import React, {
    useState,
    useEffect
} from "react";
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import styled from "styled-components"
import {
    Button,
    Input,
    SyllabusCard
} from "../../../ui_elements";
import {
    RoadMapContainer,
    PathRoadMapContainer,
    RoadMapPath,
    RoadMapProjectsToComplete
} from './Roadmap.styles';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
    RoadmapBookIcon,
    CompleteProjectBadge,
    GreenBook,
    CloseCircle
} from "../../../assets/svgs";
import { useSelector } from "react-redux";
import { useApiGet } from "../../../custom-hooks/useApiGet";
import RoadmapServices from "../../../services/roadmapServices";
import { selectUser } from "../../../Redux store/auth/auth.selector";
import { useApiPost } from "../../../custom-hooks/useApiPost";
import { ToastContainer, toast } from "react-toastify";
import { Puff } from 'react-loader-spinner';
import { formatProgressValue } from "../../../utils/constants";
import ProgressBar from "@ramonak/react-progress-bar";




const RoadmapDetails = () => {
    const { level } = useParams()
    const navigate = useNavigate()
    // const [currentTopic, setCurrentTopic] = useState([])
    const [resoureDoc, setResourceDoc] = useState(null)
    const [makeRequest, setMakeRequest] = useState(false)
    const [currentId, setCurrentId] = useState("")
    const [percentageValue, setPercentageValue] = useState("")
    const { careerPath } = useSelector(selectUser)
    const [isModuleComplete, setIsModuleComplete] = useState(false)
    const [showQuill, setShowQuill] = useState(true)
    


    console.log(careerPath, "This is user")


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

    console.log(isModuleComplete, "Hmmmm")

    // const {
    //     data: projectsResponse,
    //     // isFetching: fetchingProjectsDue,
    //     // isLoading: loadingProjectsDue
    // } = useApiGet("projects due", () => RoadmapServices.getProjectsDueForSyllabus(
    //     careerPath,
    //     state?.level
    // ))

    const {
        data: details
    } = useApiGet(
        "roadmap-details",
        () => RoadmapServices.getLevelDetails(careerPath, level),
        {
            enabled: true,
            refetchOnWindowFocus: false
        })

    console.log(details, "Deeeeetsss")
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
        () => RoadmapServices.getProgressPercentage(careerPath, level),
        {
            enabled: true,
            retry: true,
            refetchOnWindowFocus: true
        }
    )
    const {
        mutate: completeModule,
        isLoading: isUpdatingSyllabus,

    } = useApiPost(
        RoadmapServices.updateSyllablus,
        "Progress percentage",
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
            <NavigationContainer>
                <NavigationWithButton>
                    <div>
                        <p onClick={() => navigate(-1)}>&#8592;</p>
                        <p>{level} Roadmap</p>
                    </div>
                    <Button
                        style={{
                            backgroundColor: "#9DE8AA",
                        }}
                    >Complete and earn badge</Button>
                </NavigationWithButton>
                <NavigationProgressBar>
                    <NavigationStatsContainer>
                        <NavigationStats>
                            <div>
                                <RoadmapBookIcon />
                                <p>4/21 Lessons Completed</p>
                            </div>
                            <div>
                                <RoadmapBookIcon />
                                <p>4/21 Lessons Completed</p>
                            </div>
                            <div>
                                <CompleteProjectBadge />
                                <p>4/21 Lessons Completed</p>
                            </div>
                        </NavigationStats>
                        <ProgressBar
                            completed={percentageValue === 0 ? 3 : percentageValue}
                            customLabel={" "}
                            bgColor={"#2AB255"}
                            baseBgColor={"#ffffff"}
                            height={"17px"}
                            transitionTimingFunction={"ease-in"}
                            animateOnRender={true}
                            initCompletedOnAnimation={100}
                            ariaValuemax={100}
                            ariaValuemin={0}
                        />
                    </NavigationStatsContainer>
                    <NavigationHashTags>
                        <HashTags><p>#Beginner</p></HashTags>
                        <HashTags><p>#Frontend</p></HashTags>
                        <HashTags><p>#Fresher</p></HashTags>
                    </NavigationHashTags>
                </NavigationProgressBar>
            </NavigationContainer>
            <DetailsContainer>
                <Details>
                    <h4>Syllabus Content</h4>
                    {
                        details &&
                        details?.resource.map((item, index) =>
                            <SyllabusCard
                                key={index}
                                title={item?.title}
                                resource={item?.resourceUrl}
                                projectId={item?.projectId}
                                setCurrentId={setCurrentId}
                                completedSyllabus={completedSyllabus}
                                // setCurrentTopic={setCurrentTopic}
                                setResourceDoc={setResourceDoc}
                                resourceDoc={resoureDoc}
                                icon={<GreenBook />}
                                setMakeRequest={setMakeRequest}
                                activeStateIcon={<CloseCircle />}
                                isModuleComplete={isModuleComplete}
                                setIsModuleComplete={setIsModuleComplete}
                                setShowQuill={setShowQuill}

                            />)
                    }
                </Details>
                <Progress>
                    <DetailsModal>
                        {
                            makeRequest ?
                                <>
                                    {
                                        showQuill ?
                                            <>
                                                <DocumentsDisplay>
                                                    <ContentDisplay
                                                        value={resoureDoc}
                                                        readOnly={true}
                                                        modules={{ toolbar: false }}
                                                        className='quill'
                                                    />
                                                </DocumentsDisplay>

                                                <LinkSubmitContainer>
                                                    <Input
                                                        width={"50%"}
                                                        placeholder={"Please enter project link"}
                                                        backgroundColor={"var(--primary-light)"}
                                                    /> 
                                                    <TaskLinkButton primary>
                                                        Submit Project
                                                    </TaskLinkButton>
                                                </LinkSubmitContainer>

                                                <Button primary={!isModuleComplete} onClick={() => completeModule({
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
                                                                color="var(--primary)"
                                                                ariaLabel="puff-loading"
                                                            />
                                                            :
                                                            "I have completed the syllable and task"
                                                    }
                                                </Button>

                                            </>
                                            :
                                            <Puff
                                                height="40"
                                                width="40"
                                                radius={1}
                                                color="var(--primary)"
                                                ariaLabel="puff-loading"
                                            />

                                    }

                                </>
                                :
                                <h6>Select a topic to start learning...</h6>
                        }

                    </DetailsModal>
                </Progress>
            </DetailsContainer>
            <ToastContainer />
        </RoadMapDetails>
    )

}

const RoadMapDetails = styled(RoadMapContainer)`
    overflow-y: scroll !important;
     background-color:#f0f5f4;
    padding: 0 0 3rem !important;
    
`
const NavigationContainer = styled.section`
    height: 25vh;
    width: auto;
    background-color: var(--primary-light);
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const NavigationWithButton = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    height: fit-content;
    align-items: center;
    >div{
        display: flex;
        gap:10px;
        p{
            font-size: 2rem;
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
const NavigationProgressBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
`

const NavigationStatsContainer = styled.div`
    width: 50%;
`

const NavigationStats = styled.div`
    display: flex;
    gap: 5%;
    margin-bottom: 1rem;
    div{
        display: flex;
        gap:1rem;
        align-items: center;
    }
`

const HashTags = styled.aside`
    padding: 0.6rem 1rem;
    background-color: var(--light-green);
    height: 1.6rem;
    p{
        color: var(--primary);
    }

`

const NavigationHashTags = styled.div`
    display: flex;
    gap: 1rem;
`

const DetailsContainer = styled(PathRoadMapContainer)`
    padding: 0 1.5rem;
    transition: all .3s ease-in;
`
const Details = styled(RoadMapPath)`
    max-height:55vh !important;
    padding-right: 2.2rem;
    border-radius: 0.7rem;
    flex:0.3;
    position: sticky !important;
    top:20px;
    h4{
        font-size: clamp(0.8rem, 3vw, 1.2rem);
        font-weight: 600;
        margin-bottom: 1.1rem;
    }
`
const Progress = styled(RoadMapProjectsToComplete)`
    background-color: transparent;
    padding: 0;
    overflow-y: hidden;
    height: fit-content;
    flex: 0.69;
`

const ContentDisplay = styled(ReactQuill)`
    
    div{
        outline: none !important;
        border: none !important;
    }

    p,li{
        font-size: 0.9rem;
    }

    h1{
        font-size: 1.2rem !important;
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
    justify-content: center;
    flex-direction:column;
    min-height: 54vh !important;
    border-radius: 1rem;

    h6{
        font-size: clamp(0.8rem, 1.2rem, 1.2rem);
        font-weight: 500;
        color: gray;
    }

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
// const DetailsModalHeader = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items:center;
//     width:100%;
//     height:70px !important;
//     position:sticky;
//     top:-20px;
//     left:0;
//     background-color:var(--white);
//     z-index:5;
//     >p{
//         font-size: 24px;
//         font-weight: lighter;
//         :hover{
//             cursor: pointer;
//         }
//     }
//     >div{
//         display: flex;
//         gap:10px;
//         p{
//             font-size: 1.2rem;
//             font-weight: 600;
//         }
//     }
// `

const DocumentsDisplay = styled.div`
    overflow: auto;
    height:90%;
    /* overflow-x: hidden; */
    
`
const LinkSubmitContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0 ;
`
const TaskLinkButton = styled(Button)`
    width:11rem !important;
    height: inherit;
    border-radius: 0;
    align-self: flex-start !important;
    margin-top: -.3rem !important;
`

export default RoadmapDetails