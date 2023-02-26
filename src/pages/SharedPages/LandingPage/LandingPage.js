import {useState} from 'react'
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
  HowToGetStartedCardDetails
} from './LandingPage.Styles';
import { Button } from '../../../ui_elements/index';
import {
  LeaderboardIcon,
  PortfolioIcon,
  RoadmapIcon
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
        {/* <HowToGetStartedBackground>
          <img src={GreenLogo} alt={"Greeen"} />
          <img src={GreenLogo} alt={"Green"} />
        </HowToGetStartedBackground> */}
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
                <HowToGetStartedCard>
                  <HowToGetStartedTitle>
                    <h5>{card.title }</h5>
                    <LandingExpand onClick={()=>handleCardExpansion(index)}>
                      <p>+</p>
                    </LandingExpand>
                  </HowToGetStartedTitle>
                  <HowToGetStartedCardDetails open={cardState ? "open" : null}>
                    {card.description}
                  </HowToGetStartedCardDetails>

                </HowToGetStartedCard>
              )
            }
          </HowToGetStartedCardContainer>
        </HowToGetStartedContent>
      </HowToGetStartedContainer>
    </LandingMainContainer>
  )
}

export default LandingPage