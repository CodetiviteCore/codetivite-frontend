import { useState } from 'react'
import {
  HowToGetStartedBackground,
  HowToGetStartedCard,
  HowToGetStartedCardContainer,
  HowToGetStartedContainer,
  HowToGetStartedContent,
  HowToGetStartedDetails,
  LandingExpand,
  LandingFirstContainer,
  LandingIllustrator,
  LandingMainContainer,
  LandingVideoIllustratorContainer,
  LandingWhatWeDo,
  LandingWhatWeDoCard,
  LandingWhatWeDoCardContainer,
  LandingWhatWeDoContainer,
  HowToGetStartedTitle,
  HowToGetStartedCardDetails,
  CommunityContainer,
  CommunityCollaborate,
  CommunityCollaborateDetails,
  AvatarContainer,
  CallContainer,
  AudioContainer,
  AvatarElement
} from './LandingPage.Styles';
import { Button, LandingCard } from '../../../ui_elements/index';
import {
  Alex,
  Ayo,
  Call,
  LeaderboardIcon,
  PortfolioIcon,
  RoadmapIcon,
  Sophia,
  Tina,
  Tunji
} from '../../../assets/svgs';
import GreenLogo from "../../../assets/images/greenLargeLogo.png"
const LandingPage = () => {

  const [cardState, setCardState] = useState(0)
  const handleCardExpansion = (index) => {
    setCardState(index)
  }

  const cardDetails = [
    {
      title: "Create your Codetivite account",
      description: " Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id Elementum."
    },
    {
      title: "Create your Codetivite account",
      description: " Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id Elementum."
    },
    {
      title: "Create your Codetivite account",
      description: " Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id Elementum."
    },
  ]
  return (
    <LandingMainContainer>
      <LandingFirstContainer>
        <div>
          <p>UNLEASH YOUR POTENTIAL</p>
          <h2>Join our community and build real life projects with a team</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur. Senectus orci scelerisque lectus tortor tellus magnis. Molestie porta purus nunc vestibulum ante lacus. </p>
          <Button primary>Get started now</Button>
        </div>
      </LandingFirstContainer>
      <LandingVideoIllustratorContainer>
        <LandingIllustrator>

        </LandingIllustrator>
      </LandingVideoIllustratorContainer>
      <LandingWhatWeDo>
        <LandingWhatWeDoContainer>
          <p>WHAT WE DO</p>
          <h3>We are helping creatives across the globe do the following;</h3>
        </LandingWhatWeDoContainer>
        <LandingWhatWeDoCardContainer>
          <LandingWhatWeDoCard>
            <RoadmapIcon />
            <h4>Course Roadmap</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </LandingWhatWeDoCard>
          <LandingWhatWeDoCard>
            <PortfolioIcon />
            <h4>Portfolio Manager</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </LandingWhatWeDoCard>
          <LandingWhatWeDoCard>
            <LeaderboardIcon />
            <h4>Leaderboard</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </LandingWhatWeDoCard>
        </LandingWhatWeDoCardContainer>
      </LandingWhatWeDo>
      <HowToGetStartedContainer>
        <HowToGetStartedBackground>
          <img src={GreenLogo} alt={"Greeen"} />
          <img src={GreenLogo} alt={"Green"} />
        </HowToGetStartedBackground>
        <HowToGetStartedContent>
          <HowToGetStartedDetails>
            <p>HOW TO GET STARTED</p>
            <h3>Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse
              augue sed tellus id. Elementum imperdiet vitae etiam quis.
              Faucibus pellentesque tristique scelerisque in tortor.
              Vitae mattis sit lobortis ipsum elit.
            </p>
            <div>
              <Button primary>Get started</Button>
              <Button>Take clarity test</Button>
            </div>
          </HowToGetStartedDetails>
          <HowToGetStartedCardContainer>
            {
              cardDetails.map((card, index) =>
                <LandingCard
                  key={index}
                  handleCardExpansion={() => handleCardExpansion(index)}
                  title={card.title}
                  description={card.description}
                  cardState={cardState}
                  index={index}
                />
              )
            }
          </HowToGetStartedCardContainer>
        </HowToGetStartedContent>
      </HowToGetStartedContainer>
      <CommunityContainer>
        <CommunityCollaborate>
          <AvatarContainer>
            <h4>More than 300+ Memebers</h4>
            <div>
              <AvatarElement>
                <Tina />
                <p>Tina</p>
              </AvatarElement>
              <AvatarElement>
                <Ayo />
                <p>Ayo</p>
              </AvatarElement>
              <AvatarElement>
                <Alex />
                <p>Alex</p>
              </AvatarElement>
              <AvatarElement>
                <Tunji />
                <p>Tunji</p>
              </AvatarElement>
            </div>
            <div>
              <AvatarElement>
                <Sophia />
                <p>Sophia</p>
              </AvatarElement>
              <AvatarElement>
                <Ayo />
                <p>Ayo</p>
              </AvatarElement>
              <AvatarElement>
                <Alex />
                <p>Alex</p>
              </AvatarElement>
              <AvatarElement>
                <Tunji />
                <p>Tunji</p>
              </AvatarElement>
            </div>
          </AvatarContainer>
          <CallContainer>
            <Call />
          </CallContainer>
          <AudioContainer>

          </AudioContainer>
        </CommunityCollaborate>
        <CommunityCollaborateDetails>
          <p>OUR COMMUNITY</p>
          <h3>We have over 3000+ community members that uses Codevite</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Sem magna mattis malesuada hendrerit aliquet.
            Posuere aenean enim porttitor varius. Etiam libero congue faucibus ultrices.
            Imperdiet et pharetra adipiscing a vitae dui in eget.
            Posuere sit enim et porttitor proin leo felis euismod.
          </p>
          <Button primary>Join our Community</Button>
        </CommunityCollaborateDetails>
      </CommunityContainer>
    </LandingMainContainer>
  )
}

export default LandingPage