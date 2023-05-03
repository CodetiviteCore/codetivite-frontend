import React from 'react'
import { Badge, SkillIcon } from '../../../assets/svgs';
import { DashboardContainer, DashboardHeader, DashboardOverview, DashboardWelcomeBack, Overview, SkillDesDiv, SkillDetails, SkillDiv } from './dashboard.styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardWelcomeBack>
          <h6>Welcome back, <span>Victor</span></h6>
          <p>Peep your drip! Jump bak in to continue learning.</p>
        </DashboardWelcomeBack>
        <DashboardOverview>
          <h6>Overview</h6>
          <Overview>
            <SkillDetails>
              <SkillDiv>
                <SkillIcon />
              </SkillDiv>
              <SkillDesDiv>
                <p>Current skil</p>
                <p>Frontend</p>
              </SkillDesDiv>
            </SkillDetails>
            <SkillDetails>
              <SkillDiv>
                <Badge />
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

        <div>

        </div>

      </DashboardHeader>
    </DashboardContainer>
  )
}

export default Dashboard
