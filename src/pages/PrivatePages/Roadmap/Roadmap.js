import {
    AverageSalary,
    Badge,
    Decrease,
    SkillIcon
} from "../../../assets/svgs"
import { useApiGet } from "../../../custom-hooks/useApiGet"
import PreferenceServices from "../../../services/preferenceServices"
import {
    RoadMapCards,
    RoadMapCourseInfoCard
} from "../../../ui_elements"
import {
    LoaderContainer,
    PathRoadMapContainer,
    RoadMapContainer,
    RoadMapPath,
    Stats
} from "./Roadmap.styles"
import 'react-loading-skeleton/dist/skeleton.css'

import { Puff } from "react-loader-spinner"

const Roadmap = () => {

    const {
        data: careerDetails,
        isLoading: isLoadingCereerDetails
    } = useApiGet(
        "Roadmap",
        PreferenceServices.getSelectedPreferences,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false,
        }
    )   

    const statsCardDetails = [
        {
            icon: <SkillIcon />,
            title: "Current skill level",
            info: careerDetails?.userInfo?.currentSkillLevel?.title,
            description: () => {
                switch (careerDetails?.userInfo?.currentSkillLevel?.title) {
                    case "junior":
                        return console.log("You're just at the start. Long journey ahead")
                    case "entry-level":
                        return "You're at the basic level, you're getting better"
                    case "intermediate":
                        return "You are ready for a job at this stage"
                    case "advanced":
                        return "Apply for senior developer roles"

                    default:
                        break;
                }
            }
        },
        {
            icon: <AverageSalary />,
            title: "Average salary",
            info: careerDetails?.userInfo?.avarageSalary,
            description: "Earnings based on your current skills"

        },
        {
            icon: <Badge />,
            title: "Badges earned",
            info: careerDetails?.userInfo?.badgeEarned?.mostRecentBadgeGotten,
            description: () => {

                switch (careerDetails?.userInfo?.currentSkillLevel?.title) {
                    case "fresher":
                        return "You're just at the start. Long journey ahead"
                    case "entry-level":
                        return "You're at the basic level, you're getting better"
                    case "intermediate":
                        return "You are ready for a job at this stage"
                    case "advanced":
                        return "Apply for senior developer roles"

                    default:
                        break;
                }
            }
        },
        {
            icon: <SkillIcon />,
            title: "Projects completed",
            info: careerDetails?.userInfo?.completedProjects?.numberOfProjectCompleted,
            valueicon: <Decrease />,
            value: careerDetails?.userInfo?.completedProjects?.percentageIncreaseSinceLastProjectCompletion
            ,
            valueDetail: "decreased vs last month",
            improved: false

        },
    ]

    if (isLoadingCereerDetails) {
        return (
            <LoaderContainer>
                <Puff
                    height="60"
                    width="60"
                    radius={1}
                    color="var(--primary)"
                    ariaLabel="puff-loading"
                />
            </LoaderContainer>
        )
    }

    return (
        <RoadMapContainer>
            <Stats>
                {
                    statsCardDetails.map(({
                        icon,
                        title,
                        info,
                        valueicon,
                        value,
                        valueDetail,
                        improved,
                        description
                    },
                        index
                    ) => <RoadMapCards
                            key={index}
                            icon={icon}
                            title={title}
                            info={info}
                            valueIcon={valueicon}
                            value={value}
                            valueDetail={valueDetail}
                            improved={improved}
                            description={description}
                        />
                    )
                }
            </Stats>
            <PathRoadMapContainer>
                <RoadMapPath>
                    <h2>{careerDetails?.userInfo?.currentSkillLevel?.careerPath} Roadmap</h2>
                    {
                        careerDetails?.levelAndDescriptions.map((item, index) =>
                            <RoadMapCourseInfoCard
                                cardTitle={item?.roadmap}
                                level={item?.roadmap}
                                courseNo={careerDetails?.resource.length}
                                key={index}
                                item={item}
                                description={item?.description}
                            />
                        )
                    }
                </RoadMapPath>
                {/* <TaskComponent
                    taskDetails={careerDetails?.resource}

                /> */}
            </PathRoadMapContainer>
        </RoadMapContainer>
    )
}

export default Roadmap