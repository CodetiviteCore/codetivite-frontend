import React from 'react'
import {
  DashboardContainer,
  JumpBackInContainer,
  JumpBackInTaskSection,
  Stats,
  JumpBackLink,
  HeatMapSection,
} from './dashboard.styles';

import {
  Badge,
  CompleteLessonIcon,
  CompleteProjectBadge,
  GreenBook
} from '../../../assets/svgs';
import { RoadMapCards } from '../../../ui_elements/RoadmapCards/RoadmapCards';
import { SyllabusCard } from '../../../ui_elements';
import { TaskComponent } from './components/TaskComponent';
import { useApiGet } from '../../../custom-hooks/useApiGet';
import DashboardServices from '../../../services/dashboardServices';
import { truncateText } from '../../../utils/constants';
import Heatmap from '../../../assets/images/heatmap.png';
import { BlogComponent } from './components/BlogComponent';


const Dashboard = () => {


  const {
    data: careerDetails,
    // isLaoding: isLoadingCereerDetails
  } = useApiGet(
    "Dashboard",
    DashboardServices.getDashboardDetails,
    {
      enabled: true,
      retry: false,
      refetchOnWindowFocus: false,
    }
  )

  const cardDetails = [
    {
      icon: <Badge />,
      title: "Badges Earned",
      info: "5 Badges"
    },
    {
      icon: <CompleteLessonIcon />,
      title: "Completed Lessons",
      info: "06 Lessons",
      description: "Earnings based on your current skills"

    },
    {
      icon: <CompleteProjectBadge />,
      title: "Completed Projects",
      info: "02 Projects",
    },
  ]

  return (
    <DashboardContainer>

      <Stats>
        {cardDetails.map((card) => (
          <RoadMapCards key={card.title}
            icon={card?.icon}
            title={card?.title}
            info={card?.info}
            description={card.description}
          />
        ))}
      </Stats>

      <JumpBackInTaskSection>
        <JumpBackInContainer>
          <div>
            <h2>Jump right back in</h2>
            <JumpBackLink>
              <p>View Roadmap</p>
              <span>&#8594;</span>
            </JumpBackLink>
          </div>

          <>
            {
              careerDetails?.resource?.map((card, index) =>
                <SyllabusCard
                  key={index}
                  title={card?.title}
                  description={truncateText(card?.projectDescription)}
                  icon={<GreenBook />}
                  completeFromDashboard={card?.isCompleted}
                  // activeStateIcon={<CloseCircle />}

                />
              )
            }
          </>

        </JumpBackInContainer>

        <TaskComponent />
        
      </JumpBackInTaskSection>
      <HeatMapSection>
          <img src={Heatmap} alt='heat map'/>

        <BlogComponent/>
        
      </HeatMapSection>
      
    </DashboardContainer>
  )
}

export default Dashboard
