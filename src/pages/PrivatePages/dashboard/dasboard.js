import React from 'react'
import {
  DashboardContainer,
  JumpBackInContainer,
  JumpBackInTaskSection,
  Stats,
  JumpBackLink,
  RoadMapTask
} from './dashboard.styles';
import { useState } from 'react';
import { useApiGet } from '../../../custom-hooks/useApiGet';
import PreferenceServices from '../../../services/preferenceServices';
import {
  Badge,
  CloseCircle,
  CompleteLessonIcon,
  CompleteProjectBadge,
  GreenBook
} from '../../../assets/svgs';
import { RoadMapCards } from '../../../ui_elements/RoadmapCards/RoadmapCards';
import { CompleteProjectCard, SyllabusCard } from '../../../ui_elements';
import { TaskComponent } from './components/TaskComponent';


const Dashboard = () => {

  const [levels, setLevels] = useState([])

  // const {
  //   data: careerDetails,
  //   isLaoding: isLoadingCereerDetails
  // } = useApiGet(
  //   "Dashboard",
  //   PreferenceServices.getSelectedPreferences, {
  //   enabled: true,
  //   retry: false,
  //   refetchOnWindowFocus: false,
  // }
  // )

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

          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}

          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />

          <SyllabusCard
            icon={<GreenBook />}
            activeStateIcon={<CloseCircle />}
            activeState={true}
          />
        </JumpBackInContainer>

        <TaskComponent
          
        />

      </JumpBackInTaskSection>

    </DashboardContainer>
  )
}

export default Dashboard
