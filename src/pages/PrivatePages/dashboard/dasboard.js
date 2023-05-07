import React from 'react'
import Roadmap from '../Roadmap/Roadmap';
// import { Calendar } from '../../../components/Calendar/Calendar';
// import Todo from '../../../components/Todo/Todo';
import {
  DashboardContainer,
  // DashboardHeader,
  // DashboardOverview,
  // DashboardWelcomeBack,
  // Overview,
  // SkillDesDiv,
  // SkillDetails,
  // SkillDiv,
  // ImageContainer,
  // DashboardDetailsContainer,
  // DashboardInfoGraphics,
  // Skill,
  // BadgeTag
} from './dashboard.styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      {/* <DashboardHeader>
        <DashboardDetailsContainer>
          <DashboardWelcomeBack>
            <h6>Welcome back, <span>Victor</span></h6>
            <p>Peep your drip! Jump bak in to continue learning.</p>
          </DashboardWelcomeBack>
          <DashboardOverview>
            <h6>Overview</h6>
            <Overview>
              <SkillDetails>
                <SkillDiv>
                  <Skill/>
                </SkillDiv>
                <SkillDesDiv>
                  <p>Current skil</p>
                  <p>Frontend</p>
                </SkillDesDiv>
              </SkillDetails>
              <SkillDetails>
                <SkillDiv>
                  <BadgeTag/>
                </SkillDiv>
                <SkillDesDiv>
                  <p>Badges earned</p>
                  <p>Fresher</p>
                </SkillDesDiv>
              </SkillDetails>
              <div>
                <h6>80%</h6>
                <p>Project completed</p>
              </div>
            </Overview>
          </DashboardOverview>
        </DashboardDetailsContainer>

        <ImageContainer>
          <img src='https://media0.giphy.com/avatars/HeyAutoHQ/DgfrJNR8oUyv.gif'alt='dancing-robot'/>
        </ImageContainer>
      </DashboardHeader>
      <DashboardInfoGraphics>
        <Todo />
        <Calendar/>
      </DashboardInfoGraphics> */}
      <Roadmap/>
    </DashboardContainer>
  )
}

export default Dashboard
