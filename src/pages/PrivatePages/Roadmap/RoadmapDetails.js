import { CircularProgressbar } from "react-circular-progressbar";
import { useParams,useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Button, RoadmapLectureCards } from "../../../ui_elements";
import {
    RoadMapContainer,
    Stats,
    PathRoadMapContainer,
    RoadMapPath,
    RoadMapProjectsToComplete
} from './Roadmap.styles';
import { CompleteProjectCard } from "../../../ui_elements";
//avtar imports
import Tina from "../../../assets/images/tima.png"
import Toks from "../../../assets/images/toks.png"
import Tunji from "../../../assets/images/tunji.png"
import Sophia from "../../../assets/images/sophia.png"

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
const DetailsContainer = styled(PathRoadMapContainer)``
const Details = styled(RoadMapPath)``
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
    height:35rem;
    margin-top: 1.25rem;

`





const RoadmapDetails = () => {
    const { level } = useParams()
    const navigate = useNavigate()
    const avatars = [
        Tina,
        Toks,
        Tunji,
        Sophia
    ]
    return (
        <RoadMapDetails>
            <Navigation>
                <div>
                    <p onClick={()=>navigate(-1)}>&#8592;</p>
                    <p>{level} Roadmap</p>
                </div>
                <Button>Complete and earn badge</Button>
            </Navigation>
            <DetailsContainer>
                <Details>
                    <RoadmapLectureCards
                        title={"Introduction to design"}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />
                    <RoadmapLectureCards
                        title={"Lorem ipsum dolor sit amet consectetur. Consequat proin quis eget."}
                    />

                </Details>
                <Progress>
                    <CircularProgressConatiner>
                        <CircularProgress>
                            <CircularProgressbar
                                value={10}
                                text={`10%`}
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
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        // Rotate the path
                                        transform: 'rotate(0.25turn)',
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
                        <h2>Projects due for this syllabus</h2>
                        <p>We have curated detailed projects to help you learn better through practice.
                            Before the end of this roadmap you will be able to complete the projects below.
                        </p>
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />
                        <CompleteProjectCard />

                    </ProjectsDue>
                </Progress>
            </DetailsContainer>
        </RoadMapDetails>
    )
}

export default RoadmapDetails