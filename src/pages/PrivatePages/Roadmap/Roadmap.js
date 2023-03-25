import { AverageSalary, Badge, Decrease, Increase, SkillIcon } from "../../../assets/svgs"
import { CompleteProjectCard, RoadMapCards, RoadMapCourseInfoCard } from "../../../ui_elements"
import { PathRoadMapContainer, RoadMapContainer, RoadMapPath, RoadMapProjectsToComplete, Stats } from "./Roadmap.styles"

const Roadmap = () => {
    const statsCardDetails = [
        {
            icon: <SkillIcon />,
            title: "Current skill level",
            info: "Beginner",
            valueicon: <Increase />,
            value: "+12.5%",
            valueDetail: "increased vs lastmonth",
            improved: true
        },
        {
            icon: <AverageSalary />,
            title: "Average salary",
            info: "$120,000",
            valueicon: <Increase />,
            value: "+12.5%",
            valueDetail: "increased vs lastmonth",
            improved: true

        },
        {
            icon: <Badge />,
            title: "Badges earned",
            info: "Fresher",
            valueicon: <Increase />,
            value: "+12.5%",
            valueDetail: "increased vs lastmonth",
            improved: true
        },
        {
            icon: <SkillIcon />,
            title: "Projects completed",
            info: "02",
            valueicon: <Decrease />,
            value: "-12.5%",
            valueDetail: "decreased vs last month",
            improved: false

        },
    ]
    const courseInfo =[
        {
            level: "Fresher",
            courseNo:"12"
        },
        {
            level: "Entry Level",
            courseNo:"12"
        },
        {
            level: "Mid-Level",
            courseNo:"12"
        },
        {
            level: "Intermediate",
            courseNo:"12"
        },
        
        
        
        
    ]
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
                        index) => <RoadMapCards
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
                    <h2>Product Design Roadmap</h2>
                    {
                        courseInfo.map(({level,courseNo}, index) =>
                            
                            <RoadMapCourseInfoCard
                                level={level}
                                courseNo={courseNo}
                            />
                        )
                        
                    }
                </RoadMapPath>
                <RoadMapProjectsToComplete>
                    <h2>Projects to be completed</h2>
                    <p>We have curated detailed projects to help you learn better through practice.
                        Before the end of this roadmap you will be able to complete the projects below.
                    </p>
                    <CompleteProjectCard />
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>
                    <CompleteProjectCard/>

                </RoadMapProjectsToComplete>
            </PathRoadMapContainer>
        </RoadMapContainer>
    )
}

export default Roadmap