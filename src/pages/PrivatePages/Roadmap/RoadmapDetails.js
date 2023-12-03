import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, SyllabusCard } from "../../../ui_elements";
import {
  RoadMapContainer,
  PathRoadMapContainer,
  RoadMapPath,
  RoadMapProjectsToComplete,
} from "./Roadmap.styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  RoadmapBookIcon,
  CompleteProjectBadge,
  GreenBook,
  CloseCircle,
} from "../../../assets/svgs";
import { useSelector } from "react-redux";
import { useApiGet } from "../../../custom-hooks/useApiGet";
import RoadmapServices from "../../../services/roadmapServices";
import { selectUser } from "../../../Redux store/auth/auth.selector";
import { useApiPost } from "../../../custom-hooks/useApiPost";
import { ToastContainer, toast } from "react-toastify";
import { Puff } from "react-loader-spinner";
import { formatProgressValue } from "../../../utils/constants";
import ProgressBar from "@ramonak/react-progress-bar";
import Skeleton from "react-loading-skeleton";
import { devices } from "../../../utils/MediaQueiyBreakPoints";

const RoadmapDetails = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [resoureDoc, setResourceDoc] = useState(null);
  const [makeRequest, setMakeRequest] = useState(false);
  const [activeState, setActiveState] = useState(null);
  const [currentId, setCurrentId] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const { careerPath } = useSelector(selectUser);
  const [isModuleComplete, setIsModuleComplete] = useState(false);
  const [showQuill, setShowQuill] = useState(true);
  const [projectLink, setProjectLink] = useState("");
  const [setIsError] = useState(false);

  const onUpdateSyllabuSuccess = (data) => {
    toast.success("Marked as completed", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });
  };

  const onUpdateSyllabusError = (e) => {
    toast.error(e.data?.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });
  };

  const { data: details, isLoading: isLoadingDetails } = useApiGet(
    "roadmap-details",
    () => RoadmapServices.getLevelDetails(careerPath, level),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  const { data: completedSyllabus, isLoading: isLoadingCompletedSyllabus } =
    useApiGet(
      "Completed syllabus state",
      RoadmapServices.getCompletedSyllablus,
      {
        enabled: true,
        retry: false,
        cacheTime: 0,
        refetchOnWindowFocus: false,
      }
    );

  const { data: progressPercentage, isLoading: isLoadingProgressPercentage } =
    useApiGet(
      "Progress percentage",
      () => RoadmapServices.getProgressPercentage(careerPath, level),
      {
        enabled: true,
        retry: true,
        refetchOnWindowFocus: true,
        cacheTime: 0,
      }
    );
  const { mutate: completeModule, isLoading: isUpdatingSyllabus } = useApiPost(
    RoadmapServices.updateSyllablus,
    ["Progress percentage", "Completed syllabus state"],
    onUpdateSyllabuSuccess,
    onUpdateSyllabusError
  );

  const handleCompleteModule = (data) => {
    setIsError(false);
    return data.url === "" ? setIsError(true) : completeModule(data);
  };
  useEffect(() => {
    if (progressPercentage?.progress) {
      const fromattedValue = formatProgressValue(progressPercentage?.progress);
      setPercentageValue(fromattedValue);
    }
  }, [progressPercentage]);

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
          >
            Complete and earn badge
          </Button>
        </NavigationWithButton>
        <NavigationProgressBar>
          <NavigationStatsContainer>
            <NavigationStats>
              {isLoadingDetails ||
              isLoadingProgressPercentage ||
              isLoadingCompletedSyllabus ? (
                <Skeleton
                  width={200}
                  height={20}
                  baseColor={`var(--light-green)`}
                />
              ) : (
                <div>
                  <RoadmapBookIcon />
                  <p>
                    {completedSyllabus?.projectsCompleted.length}/
                    {details?.resource.length} Lessons Completed
                  </p>
                </div>
              )}

              {isLoadingDetails ||
              isLoadingProgressPercentage ||
              isLoadingCompletedSyllabus ? (
                <Skeleton
                  width={200}
                  height={20}
                  baseColor={`var(--light-green)`}
                />
              ) : (
                <div>
                  <CompleteProjectBadge />
                  <p>
                    {completedSyllabus?.projectsCompleted.length}/
                    {details?.resource.length} Projects Completed
                  </p>
                </div>
              )}
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
            <HashTags>
              <p>#Beginner</p>
            </HashTags>
            <HashTags>
              <p>#Frontend</p>
            </HashTags>
            <HashTags>
              <p>#Fresher</p>
            </HashTags>
          </NavigationHashTags>
        </NavigationProgressBar>
      </NavigationContainer>
      <DetailsContainer>
        <Details>
          <h4>Syllabus Content</h4>

          {details &&
          !isLoadingDetails &&
          !isLoadingCompletedSyllabus &&
          !isLoadingProgressPercentage ? (
            details?.resource.map((item, index) => (
              <SyllabusCard
                key={index}
                cardActiveState={index}
                activeState={activeState}
                setActiveState={setActiveState}
                title={item?.title}
                isCompleted={item?.isCompleted}
                resource={item?.resourceUrl}
                projectId={item?.projectId}
                setCurrentId={setCurrentId}
                completedSyllabus={completedSyllabus}
                setResourceDoc={setResourceDoc}
                resourceDoc={resoureDoc}
                icon={<GreenBook />}
                setMakeRequest={setMakeRequest}
                activeStateIcon={<CloseCircle />}
                isModuleComplete={isModuleComplete}
                setIsModuleComplete={setIsModuleComplete}
                setShowQuill={setShowQuill}
              />
            ))
          ) : (
            <>
              <Skeleton
                height={80}
                width={450}
                style={{ marginBottom: "20px" }}
              />
              <Skeleton
                height={80}
                width={450}
                style={{ marginBottom: "20px" }}
              />
              <Skeleton
                height={80}
                width={450}
                style={{ marginBottom: "20px" }}
              />
            </>
          )}
        </Details>
        <Progress>
          <DetailsModal>
            {makeRequest ? (
              <>
                {showQuill ? (
                  <>
                    <DocumentsDisplay>
                      <ContentDisplay
                        value={resoureDoc}
                        readOnly={true}
                        modules={{ toolbar: false }}
                        className="quill"
                      />
                    </DocumentsDisplay>

                    {isModuleComplete ? null : (
                      <LinkSubmitContainer>
                        <Input
                          width={"50%"}
                          placeholder={"Please enter project link"}
                          backgroundColor={"var(--primary-light)"}
                          value={projectLink}
                          onChange={(e) => setProjectLink(e.target.value)}
                        />
                        {/* {isError && <p>Please insert project link</p>} */}
                      </LinkSubmitContainer>
                    )}

                    <Button
                      primary={!isModuleComplete}
                      onClick={() => {
                        if (isModuleComplete) {
                          handleCompleteModule({
                            roadmap: `${careerPath}`,
                            skillLevel: `${
                              level === "Fresher"
                                ? "junior"
                                : level === "Entry-Level"
                                ? "entryLevel"
                                : level
                            }`,
                            projectId: `${currentId}`,
                            url: `${projectLink}`,
                          });
                          setProjectLink("");
                        } else {
                          return null;
                        }
                      }}
                    >
                      {isUpdatingSyllabus ? (
                        <Puff
                          height="40"
                          width="40"
                          radius={1}
                          color="white"
                          ariaLabel="puff-loading"
                        />
                      ) : (
                        "I have completed the syllable and task"
                      )}
                    </Button>
                  </>
                ) : (
                  <Puff
                    height="40"
                    width="40"
                    radius={1}
                    color="var(--primary)"
                    ariaLabel="puff-loading"
                  />
                )}
              </>
            ) : (
              <h6>Select a topic to start learning...</h6>
            )}
          </DetailsModal>
        </Progress>
      </DetailsContainer>
      <ToastContainer />
    </RoadMapDetails>
  );
};

const RoadMapDetails = styled(RoadMapContainer)`
  overflow-y: scroll !important;
  background-color: #f0f5f4;
  padding: 0 0 3rem !important;
  @media ${devices.tablet} {
    padding: 0 !important;
  }
`;
const NavigationContainer = styled.section`
  height: auto;
  width: auto;
  background-color: var(--primary-light);
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${devices.tablet} {
    flex: 1 1 0%;
    padding: 0.5rem;
  }
`;
const NavigationWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-size: 1.5rem;
      font-weight: 600;
    }
    p:first-child {
      transition: all 0.5s ease;
      :hover {
        cursor: pointer;
        transform: scaleX(1.5);
      }
    }
  }
  @media ${devices.tablet} {
    > div {
      p {
        font-size: 0.7rem;
        line-height: 0.8rem;
      }
    }
  }
`;
const NavigationProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  @media ${devices.tablet} {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const NavigationStatsContainer = styled.div`
  width: 50%;
  @media ${devices.tablet} {
    width: 100%;
  }
`;

const NavigationStats = styled.div`
  display: flex;
  gap: 5%;
  margin-bottom: 1rem;
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-wrap: wrap;
    div {
      gap: 0.6rem;
      p {
        font-size: 0.7rem;
        line-height: 1rem;
      }
    }
  }
`;

const HashTags = styled.aside`
  padding: 0.6rem 1rem;
  background-color: var(--light-green);
  height: 1.6rem;
  p {
    color: var(--primary);
  }
  @media ${devices.tablet} {
    padding: 0.3rem 1rem;
  }
`;

const NavigationHashTags = styled.div`
  display: flex;
  gap: 1rem;
  @media ${devices.tablet} {
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

const DetailsContainer = styled(PathRoadMapContainer)`
  padding: 0 1.5rem;
  transition: all 0.3s ease-in;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    width: 90%;
    padding: 0.5rem;
  }
`;
const Details = styled(RoadMapPath)`
  max-height: 55vh !important;
  padding-right: 2.2rem;
  border-radius: 0.7rem;
  flex: 0.3;
  position: sticky !important;
  top: 20px;
  h4 {
    font-size: clamp(0.8rem, 3vw, 1.2rem);
    font-weight: 600;
    margin-bottom: 1.1rem;
  }
  @media ${devices.tablet} {
    flex: 1 1 0%;
    width: 90%;
    overflow-x: hidden;
  }
`;
const Progress = styled(RoadMapProjectsToComplete)`
  padding: 0;
  overflow-y: hidden;
  height: fit-content;
  flex: 0.69;
  @media ${devices.tablet} {
    flex: 1 1 0%;
    width: 95%;
  }
`;

const ContentDisplay = styled(ReactQuill)`
  div {
    outline: none !important;
    border: none !important;
  }

  p,
  li {
    font-size: 0.9rem;
  }

  h1 {
    font-size: 1.2rem !important;
  }
  @media ${devices.tablet} {
    p,
    li {
      font-size: 0.7rem;
    }
    h1 {
      font-size: 1rem !important;
      line-height: 1.5rem;
    }
  }
`;

const DetailsModal = styled.div`
  position: relative;
  height: fit-content;
  max-width: inherit;
  background-color: var(--white);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 54vh !important;
  border-radius: 1rem;

  h6 {
    font-size: clamp(0.8rem, 1.2rem, 1.2rem);
    font-weight: 500;
    color: gray;
  }

  button {
    margin-top: 2rem;
    width: 25rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ primary }) =>
      primary ? "not-allowed" : "pointer"} !important;
  }
  @media ${devices.tablet} {
    padding: 0.5rem;
    h6 {
      font-size: 0.8rem;
    }
    button {
      width: 100%;
      height: 3rem;
    }
  }
`;
const DocumentsDisplay = styled.div`
  overflow: auto;
  height: 90%;
  @media ${devices.tablet} {
    padding: 0;
  }
`;
const LinkSubmitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: clamp(0.7rem, 0.8rem, 0.8rem);
    color: red;
  }
`;

export default RoadmapDetails;
