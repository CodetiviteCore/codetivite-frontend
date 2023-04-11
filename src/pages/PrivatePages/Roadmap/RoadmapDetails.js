import React, { useContext, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { CircularProgressbar } from "react-circular-progressbar";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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
import { Modal } from "../../../components";
//avtar imports
import Tina from "../../../assets/images/tima.png"
import Toks from "../../../assets/images/toks.png"
import Tunji from "../../../assets/images/tunji.png"
import Sophia from "../../../assets/images/sophia.png"
import { RoadmapBookIcon } from "../../../assets/svgs";




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

const DetailsModal = styled.div`
    height: 90vh;
    max-width:681px;
    background-color: var(--white);
    overflow-y:scroll;
    overflow-x: hidden;
    padding: 1.5rem;
    hr{
        margin-top: 1.5rem;
        opacity: 0.3;
    }
`
const DetailsModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
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
const Overview = styled.div`
    margin-top: 1.5rem;
    h3{
        margin-bottom: 6px;
    }
    p{
        line-height: 1.2;
        font-size: 0.9rem;
        margin-top: 1rem;
    }
    

`
const Resources = styled(Overview)`
    div{
        margin-top:16px;
    }
    p{
      display: block;
      font-size:0.9rem;
      color: var(--primary);
    }
`
const Projects = styled(Overview)`

`





const RoadmapDetails = () => {
    const { level } = useParams()
    const navigate = useNavigate()
    const { state } = useLocation()
    const [currentTopic, setCurrentTopic] = useState([])
    const [link,setLink] = useState(null)
    const { setIsModalOpen, isModalOpen } = useContext(ModalContext)
    const avatars = [
        Tina,
        Toks,
        Tunji,
        Sophia
    ]
    const redirectToResource = (resourceLink) => {
        window.location.href=resourceLink
    }
    return (
        <RoadMapDetails>
            <Modal isOpen={isModalOpen}>
                <DetailsModal>
                    <DetailsModalHeader>
                        <div>
                            <RoadmapBookIcon />
                            <p>{currentTopic}</p>
                        </div>
                        <p onClick={() => setIsModalOpen(false)}>&#10006;</p>
                    </DetailsModalHeader>
                    <hr />
                    <Overview>
                        <h3>Overview</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Odio tempus sed egestas dapibus consequat sed.
                            Eu elit aenean et quisque. Magna ipsum faucibus varius bibendum auctor et donec nunc.
                            Diam bibendum at ipsum quis. Eget nisl tristique consectetur risus quis vel donec accumsan magna.
                            Vitae malesuada eget ut ut malesuada. Ornare eget purus cursus lectus etiam netus.
                        </p>

                        <p> Et at vel consequat egestas fermentum est.
                            Enim pretium in nulla sit sed tellus eget tristique in. Eget in urna varius enim neque neque a.
                            Dolor quam ut dui orci purus est consectetur placerat erat. At nunc ut eu elit dui et et nunc semper.
                            Semper morbi quis et accumsan varius platea tincidunt bibendum mauris.
                        </p>

                        <p>Cras feugiat ut nisi erat leo. At in pellentesque ac felis convallis pellentesque ante.
                            Vulputate tempus scelerisque sed senectus nisi. Quam at arcu odio vel.
                            Risus at bibendum dui varius id nibh pellentesque. Amet enim orci a lacus lacus congue leo vulputate.
                            In aliquam dictum pulvinar ut aliquam integer. Porttitor a massa ante eget volutpat.
                            Etiam rhoncus velit velit in vitae fames.
                        </p>
                    </Overview>
                    <Resources>
                        <h3>Resources</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Odio tempus sed egestas dapibus consequat sed.
                            Eu elit aenean et quisque. Magna ipsum faucibus varius bibendum auctor et donec nunc.
                            Diam bibendum at ipsum quis. Eget nisl tristique consectetur risus quis vel donec accumsan magna.
                            Vitae malesuada eget ut ut malesuada. Ornare eget purus cursus lectus etiam netus.
                        </p>
                        <div>
                            <p onClick={()=>redirectToResource(link)}> https://codetivite.com/</p>
                        </div>


                    </Resources>
                    <Projects>
                        <h3>Projects</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Odio tempus sed egestas dapibus consequat sed.
                            Eu elit aenean et quisque. Magna ipsum faucibus varius bibendum auctor et donec nunc.
                            Diam bibendum at ipsum quis. Eget nisl tristique consectetur risus quis vel donec accumsan magna.
                            Vitae malesuada eget ut ut malesuada. Ornare eget purus cursus lectus etiam netus.
                        </p>
                    </Projects>
                </DetailsModal>
            </Modal>

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
                        state.map((item, index) =>
                            <RoadmapLectureCards
                                key={index}
                                title={item.title}
                                setIsModalOpen={setIsModalOpen}
                                setCurrentTopic={setCurrentTopic}
                                setLink={setLink}
                            />)
                    }

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
                                        transition: 'all 1.5s ease-out',
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