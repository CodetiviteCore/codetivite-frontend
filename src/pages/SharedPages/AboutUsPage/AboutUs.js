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
          >Tough times don’t last, We got you<span> covered.</span></h2>

        </div>
        <div>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >
            We understand that times can be tough, but we're here to support you on your tech journey.
            Our platform is designed to provide accessible and affordable learning opportunities for anyone,
            regardless of their background or current situation.
            With our comprehensive resources and supportive community, you can be confident that we've got
            your back every step of the way. Join us today and let's tackle tough times together.
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
            <p>Our roadmaps cater to both beginners and advanced learners,
              covering a wide range of topics in the latest technologies.
              From web development to artificial intelligence,
              our modular approach ensures easy-to-follow learning.
            </p>
          </WhatWeDoCard>
          <WhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="140"
          >
            <PortfolioIcon />
            <h4>Portfolio Manager</h4>
            <p>Generate a portfolio that showcases all the skills you've learned and
              the projects you've worked on. Our portfolio manager is more than just
              a resume - it's a proof of learning document that demonstrates your proficiency
              in the latest technologies.
            </p>
          </WhatWeDoCard>
          <WhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="160"
          >
            <LeaderboardIcon />
            <h4>Leaderboard</h4>
            <p>Compete with other techies and see how you rank on Codetivite's real-time leaderboard.
              Our leaderboard tracks your progress in courses and builder's program,
              motivating you to climb to the top
            </p>
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
              Looking for an exciting opportunity to work in the tech industry?
              Join our team at Codetivite! We are always on the lookout for
              talented individuals who are passionate about technology and education.
              With our dynamic and collaborative work environment, you'll have the
              chance to work on cutting-edge projects and contribute to our mission of
              empowering techies to achieve their dreams. Check out our current job
              openings and apply today!
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
                    Making training and education accessible to a wide range of individuals,
                    regardless of background or experience.
                  </p>
                </ValuesCard>
                <ValuesCard>
                  <Support />
                  <h6>Support</h6>
                  <p>
                    Providing ongoing support and resources to help techies succeed.
                  </p>
                </ValuesCard>
              </div>
              <div>
                <ValuesCard>
                  <Empowerment />
                  <h6>Empowerment</h6>
                  <p>
                    Providing the tools and resources needed to empower techies to succeed.
                  </p>
                </ValuesCard>
                <ValuesCard>
                  <Inclusive />
                  <h6>Inclusivity</h6>
                  <p>
                    Promoting a diverse and inclusive community where everyone is
                    welcome and encouraged to learn and grow.
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
          <p>Join our growing community of techies at Codetivite! We're passionate
            about learning and collaboration and offer comprehensive course roadmaps,
            builder's program, and leaderboard to help you succeed in the tech industry.
            Whether you're a beginner or an experienced techie, we welcome you to join us today!
          </p>
          <Button onClick={() => {      
            window.location.href = `https://twitter.com/codetivite`
          }}>Join our Community</Button>
          
        </CommunityCollaborateDetails>
      </CommunityContainer>

    </AboutUsOuterContainer>
  )
}

export default AboutUs