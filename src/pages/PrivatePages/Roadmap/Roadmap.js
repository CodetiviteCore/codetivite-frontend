import { AverageSalary, Badge, Decrease, SkillIcon } from "../../../assets/svgs"
import { useApiGet } from "../../../custom-hooks/useApiGet"
import PreferenceServices from "../../../services/preferenceServices"
import { CompleteProjectCard, RoadMapCards, RoadMapCourseInfoCard } from "../../../ui_elements"
import { LoaderContainer, PathRoadMapContainer, RoadMapContainer, RoadMapPath, RoadMapProjectsToComplete, Stats } from "./Roadmap.styles"
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect } from "react"
import { useState } from "react"
import { Puff } from "react-loader-spinner"

const Roadmap = () => {

    const [levels, setLevels] = useState([])

    const {
        data: careerDetails,
        isLoading: isLoadingCereerDetails
    } = useApiGet(
        "Roadmap",
        PreferenceServices.getSelectedPreferences,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false
        }
    )

    useEffect(() => {
        if (!!careerDetails) {

            let levelsArray = []
            careerDetails?.resource?.levels?.map((level) => {

                const fresher = level?.junior ? level?.junior?.map(({ title, resourceUrl, projectId }) => ({
                    cardTitle: "Fresher",
                    title: title,
                    resource: resourceUrl,
                    projectId: projectId
                })) : []

                const entryLevel = level?.entrylevel ? level?.entrylevel?.map(({ title, resourceUrl, projectId }) => ({
                    cardTitle: "Entry-level",
                    title: title,
                    resource: resourceUrl,
                    projectId: projectId
                })) : []


                const intermediate = level?.intermediate ? level?.intermediate?.map(({ title, resourceUrl, projectId }) => ({
                    cardTitle: "Intermediate",
                    title: title,
                    resource: resourceUrl,
                    projectId: projectId
                })) : []



                const advanced = level?.advanced ? level?.advanced?.map(({ title, resourceUrl, projectId }) => ({
                    cardTitle: "Advanced",
                    title: title,
                    resource: resourceUrl,
                    projectId: projectId
                })) : []

                switch (true) {
                    case (intermediate.length <= 0):
                        levelsArray.push(fresher, entryLevel, advanced);
                        break;
                    case (fresher.length <= 0):
                        levelsArray.push(entryLevel, intermediate, advanced);
                        break;
                    case (entryLevel.length <= 0):
                        levelsArray.push(fresher, intermediate, advanced);
                        break;
                    case (advanced.length <= 0):
                        levelsArray.push(fresher, entryLevel, intermediate);
                        break;
                    default:
                        levelsArray.push(fresher, entryLevel, intermediate, advanced);
                        break;
                }

                return setLevels(levelsArray)
            })
        }
    }, [careerDetails])



    const statsCardDetails = [
        {
            icon: <SkillIcon />,
            title: "Current skill level",
            info: careerDetails?.userInfo?.currentSkillLevel?.title,
            description: () => {
                console.log(careerDetails?.userInfo?.currentSkillLevel?.title)
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
                            description={()=>description()}
                        />
                    )
                }
            </Stats>
            <PathRoadMapContainer>
                <RoadMapPath>
                    <h2>{careerDetails?.resource?.careerPath} Roadmap</h2>

                    {
                        levels.map((item, index) =>
                            <RoadMapCourseInfoCard
                                cardTitle={item[0]?.cardTitle}
                                level={item[0]?.cardTitle}
                                courseNo={item?.length}
                                key={index}
                                item={item}
                            />)
                    }
                </RoadMapPath>
                <RoadMapProjectsToComplete>
                    <h2>Projects to be completed</h2>
                    <p>We have curated detailed projects to help you learn better through practice.
                        Before the end of this roadmap you will be able to complete the projects below.
                    </p>
                    <CompleteProjectCard />
                    <CompleteProjectCard />

                </RoadMapProjectsToComplete>
            </PathRoadMapContainer>
        </RoadMapContainer>
    )
}

export default Roadmap