import React from 'react'
import {
  AboutUsFirstContainer,
  AboutUsOuterContainer,
  AboutUsSecondContainer,
  WhatWeDo,
  WhatWeDoContainer,
  WhatWeDoCardContainer,
  WhatWeDoCard,
  TeamContainer,
  TeamHeading,
  TeamGallery,
  TeamGalleryContainer,
  OurValuesContainer,
  ValuesContainer,
  ValuesCard,
  OurValueHeader

} from './AboutUs.styles'
import AboutBanner from "../../../assets/images/about-us.png"
import {
  PortfolioIcon,
  RoadmapIcon,
  LeaderboardIcon,
  Accessibility,
  Support,
  Empowerment,
  Inclusive,
  Audio
} from '../../../assets/svgs'
import { Button, TeamImage } from '../../../ui_elements'
import Team1 from "../../../assets/images/team/team1.png"
import Team2 from "../../../assets/images/team/team2.png"
import Team3 from "../../../assets/images/team/team3.png"
import Team4 from "../../../assets/images/team/team4.png"
import Team5 from "../../../assets/images/team/team5.png"
import LargeLogo from "../../../assets/images/greenLargeLogo.png"
import Call from "../../../assets/images/call.png"
import Alex from "../../../assets/images/alex.png"
import Ayo from "../../../assets/images/ayo.png"
import Sophia from "../../../assets/images/sophia.png"
import Tina from "../../../assets/images/tima.png"
import Tobi from "../../../assets/images/toib.png"
import Toks from "../../../assets/images/toks.png"
import Tunji from "../../../assets/images/tunji.png"
import {
  CommunityCollaborate,
  AvatarContainer,
  AvatarElement,
  CallContainer,
  AudioContainer,
  CommunityCollaborateDetails,
  CommunityContainer
} from '../LandingPage/LandingPage.Styles';

const AboutUs = () => {
  return (
    <AboutUsOuterContainer>
      <AboutUsFirstContainer>
        <div>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >ABOUT US</p>
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="100"
          >Tough times don’t last, We got you<span>covered.</span></h2>

        </div>
        <div>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
            ut commodo diam libero vitae erat.
          </p>
        </div>
      </AboutUsFirstContainer>
      <AboutUsSecondContainer>
        <div>
          <img
            src={AboutBanner}
            alt='About banner'
          />
        </div>
      </AboutUsSecondContainer>

      <WhatWeDo>
        <WhatWeDoContainer>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >WHAT WE DO</p>
          <h3
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="120"
          >We are helping creatives across the globe do the following;</h3>
        </WhatWeDoContainer>
        <WhatWeDoCardContainer>
          <WhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <RoadmapIcon />
            <h4>Course Roadmap</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </WhatWeDoCard>
          <WhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="140"
          >
            <PortfolioIcon />
            <h4>Portfolio Manager</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </WhatWeDoCard>
          <WhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="160"
          >
            <LeaderboardIcon />
            <h4>Leaderboard</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </WhatWeDoCard>
        </WhatWeDoCardContainer>
      </WhatWeDo>
      <TeamContainer>
        <div>
          <TeamHeading>
            <div>
              <h6>BUILT BY COMMUNITY FOR COMMUNITY</h6>
              <h5>Join our team</h5>
              <Button
                primary
              >
                See current openings
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sem magna mattis malesuada hendrerit aliquet. Posuere aenean enim porttitor varius. Etiam libero congue faucibus ultrices. Imperdiet et pharetra adipiscing a vitae dui in eget. Posuere sit enim et porttitor proin leo felis euismod.
            </p>
          </TeamHeading>
          <TeamGalleryContainer>
            <TeamGallery>
              <TeamImage
                image={Team1}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(42, 178, 85, 0.7)"}
                backgroundColor={"var(--primary)"}
              />
              <TeamImage
                image={Team5}
                name={"Ama Victor"}
                position={"Co-founder"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(0, 92, 221, 0.7)"}
                backgroundColor={"var(--blue)"}
              />
              <TeamImage
                image={Team3}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(252, 228, 89, 0.7)"}
                backgroundColor={"var(--primary-yellow)"}
              />
              <TeamImage
                image={Team4}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(0, 92, 221, 0.7)"}
                backgroundColor={"var(--blue)"}
              />

              <TeamImage
                image={Team3}
                name={"Ama Victor"}
                position={"Co-founder"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(42, 178, 85, 0.7)"}
                backgroundColor={"var(--primary)"}
              />
              <TeamImage
                image={Team2}

                name={"Prince"}
                position={"Founder"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(42, 178, 85, 0.7)"}
                backgroundColor={"var(--primary)"}
              />
              <TeamImage
                image={Team1}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(252, 228, 89, 0.7)"}
                backgroundColor={"var(--primary-yellow)"}
              />
              <TeamImage
                image={Team4}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(0, 92, 221, 0.7)"}
                backgroundColor={"var(--blue)"}
              />
              <TeamImage
                image={Team2}
                name={"Ama Victor"}
                position={"Co-founder"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(42, 178, 85, 0.7)"}
                backgroundColor={"var(--primary)"}
              />
              <TeamImage
                image={Team1}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(252, 228, 89, 0.7)"}
                backgroundColor={"var(--primary-yellow)"}
              />
              <TeamImage
                image={Team4}
                name={"Alex Ogubuike"}
                position={"CEO"}
                twitter={"google.com"}
                linkedIn={"google.com"}
                overlayColor={"rgba(0, 92, 221, 0.7)"}
                backgroundColor={"var(--blue)"}
              />

            </TeamGallery>

          </TeamGalleryContainer>

          <OurValuesContainer>
            <img
              src={LargeLogo}
              alt='logo'
            />
            <OurValueHeader>
              <p>OUR VALUES</p>
              <h4> Collaborate and build real-world projects</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. <br />
                uis cursus, mi quis viverra ornare.
              </p>
            </OurValueHeader>

            <ValuesContainer>
              <div>
                <ValuesCard>
                  <Accessibility />
                  <h6>Accessibility</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Commodo pharetra ultricies senectus est dolor id.
                  </p>
                </ValuesCard>
                <ValuesCard>
                  <Support />
                  <h6>Support</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Commodo pharetra ultricies senectus est dolor id.
                  </p>
                </ValuesCard>
              </div>
              <div>
                <ValuesCard>
                  <Empowerment />
                  <h6>Accessibility</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Commodo pharetra ultricies senectus est dolor id.
                  </p>
                </ValuesCard>
                <ValuesCard>
                  <Inclusive />
                  <h6>Support</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur.
                    Commodo pharetra ultricies senectus est dolor id.
                  </p>
                </ValuesCard>
              </div>
            </ValuesContainer>
          </OurValuesContainer>
        </div>
      </TeamContainer>
      <CommunityContainer>
        <CommunityCollaborate>
          <AvatarContainer
            data-aos="zoom-in-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <h4>More than 300+ Memebers</h4>
            <div>
              <AvatarElement>
                <img src={Tina} alt={"icon"} />
                <p>Tina</p>
              </AvatarElement>
              <AvatarElement>
                <img src={Ayo} alt={"icon"} />
                <p>Ayo</p>
              </AvatarElement>
              <AvatarElement>
                <img src={Alex} alt={"icon"} />
                <p>Alex</p>
              </AvatarElement>
              <AvatarElement>
                <img src={Tunji} alt={"icon"} />
                <p>Tunji</p>
              </AvatarElement>
            </div>
            <div>
              <AvatarElement>
                <img src={Sophia} alt={"icon"} />
                <p>Sophia</p>
              </AvatarElement>
              <AvatarElement>
                <img src={Toks} alt={"icon"} />
                <p>Toks</p>
              </AvatarElement>
              <AvatarElement>
                <img src={Tobi} alt={"icon"} />
                <p>Tobi</p>
              </AvatarElement>

            </div>
          </AvatarContainer>
          <CallContainer
            data-aos="zoom-in-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <img src={Call} alt="calling" />
          </CallContainer>
          <AudioContainer
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Audio />
            <div>
              <h5>Collaborate</h5>
              <p>Access to our community members</p>
            </div>
          </AudioContainer>
        </CommunityCollaborate>
        <CommunityCollaborateDetails>
          <h5>OUR COMMUNITY</h5>
          <h3>We have over 3000+ community members that uses Codevite</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Sem magna mattis malesuada hendrerit aliquet.
            Posuere aenean enim porttitor varius. Etiam libero congue faucibus ultrices.
            Imperdiet et pharetra adipiscing a vitae dui in eget.
            Posuere sit enim et porttitor proin leo felis euismod.
          </p>
          <Button primary>Join our Community</Button>
        </CommunityCollaborateDetails>
      </CommunityContainer>

    </AboutUsOuterContainer>
  )
}

export default AboutUs