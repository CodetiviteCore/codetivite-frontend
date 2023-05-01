import { AverageSalary, Badge, Decrease, Increase, SkillIcon } from "../../../assets/svgs"
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
    } = useApiGet("Roadmap", PreferenceServices.getSelectedPreferences)

    useEffect(() => {
        if (!!careerDetails) {

            let levelsArray = []
            console.log(careerDetails?.resource?.levels, "yayyy")

            careerDetails?.resource?.levels?.map((level) => {

                const fresher = level?.junior ? level?.junior?.map(({ title, resourceUrl }) => ({
                    cardTitle: "Fresher",
                    title: title,
                    resource: resourceUrl
                })) : []

                const entryLevel = level?.entrylevel ? level?.entrylevel?.map(({ title, resourceUrl }) => ({
                    cardTitle: "Entry-level",
                    title: title,
                    resource: resourceUrl
                })) : []

                const intermediate = level?.intermediate ? level?.intermediate?.map(({ title, resourceUrl }) => ({
                    cardTitle: "Intermediate",
                    title: title,
                    resource: resourceUrl
                })) : []

                const advanced = level?.advanced ? level?.advanced?.map(({ title, resourceUrl }) => ({
                    cardTitle: "Advanced",
                    title: title,
                    resource: resourceUrl
                })) : []

                levelsArray.push(
                    fresher,
                    entryLevel,
                    intermediate,
                    advanced
                )
                return setLevels(levelsArray)
            })
        }
    }, [careerDetails])

    

    const statsCardDetails = [
        {
            icon: <SkillIcon />,
            title: "Current skill level",
            info: careerDetails?.userInfo?.currentSkillLevel?.title,
            valueicon: <Increase />,
            value: "+12.5%",
            valueDetail: "increased vs lastmonth",
            improved: true
        },
        {
            icon: <AverageSalary />,
            title: "Average salary",
            info: careerDetails?.userInfo?.avarageSalary,
            valueicon: <Increase />,
            value: "+12.5%",
            valueDetail: "increased vs lastmonth",
            improved: true

        },
        {
            icon: <Badge />,
            title: "Badges earned",
            info: careerDetails?.userInfo?.badgeEarned?.mostRecentBadgeGotten,
            valueicon: <Increase />,
            value: "+12.5%",
            valueDetail: "increased vs lastmonth",
            improved: true
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

    // const courseInfo = [
    //     {
    //         level: "Fresher",
    //         courseNo: "12"
    //     },
    //     {
    //         level: "Entry Level",
    //         courseNo: "12"
    //     },
    //     {
    //         level: "Intermediate",
    //         courseNo: "12"
    //     },
    //     {
    //         level: "Advanced",
    //         courseNo: "12"
    //     },

    // ]

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
                        improved
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

                </RoadMapProjectsToComplete>
            </PathRoadMapContainer>
        </RoadMapContainer>
    )
}

export default Roadmap