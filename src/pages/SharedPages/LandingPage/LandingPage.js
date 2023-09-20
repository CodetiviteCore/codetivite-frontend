import {useState } from 'react'
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/navigation';

import {
  HowToGetStartedBackground,
  HowToGetStartedCardContainer,
  HowToGetStartedContainer,
  HowToGetStartedContent,
  HowToGetStartedDetails,
  LandingFirstContainer,
  LandingIllustrator,
  LandingMainContainer,
  LandingVideoIllustratorContainer,
  LandingWhatWeDo,
  LandingWhatWeDoCard,
  LandingWhatWeDoCardContainer,
  LandingWhatWeDoContainer,
  CommunityContainer,
  CommunityCollaborate,
  CommunityCollaborateDetails,
  AvatarContainer,
  CallContainer,
  AudioContainer,
  AvatarElement,
  LandingCarouselContainer,
  LandingCarouselElement,
  PrevArrow,
  NextArrow,
  Slide,
  // LandingBlogContainer,
  // BlogContainer,
  // LandingBlogCardContainer,
} from './LandingPage.Styles';
import {
  Audio,
  LeaderboardIcon,
  LeftArrow,
  PortfolioIcon,
  RightArrow,
  RoadmapIcon,
} from '../../../assets/svgs';
import GreenLogo from "../../../assets/images/greenLargeLogo.png"
import { Button, LandingCard } from '../../../ui_elements/index';
import Call from "../../../assets/images/call.png"
import Alex from "../../../assets/images/alex.png"
import Ayo from "../../../assets/images/ayo.png"
import Sophia from "../../../assets/images/sophia.png"
import Tina from "../../../assets/images/tima.png"
import Tobi from "../../../assets/images/toib.png"
import Toks from "../../../assets/images/toks.png"
import Tunji from "../../../assets/images/tunji.png"
// import Blog from "../../../assets/images/blogPicture.png"
// import AuthorAvatar from "../../../assets/images/blogAvatar.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'aos/dist/aos.css';
// import { BlogCards } from '../../../ui_elements/BLogcards/blogCards';
//import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';






const LandingPage = () => {
  const [cardState, setCardState] = useState(0)
  // const navigate = useNavigate()
  const location = useLocation();
  const communityRef = useRef(null)
  const {setIsModalOpen} = useContext(ModalContext)


  useEffect(() => {
    if (location.hash === '#community') {
      // Scroll to the community section
      const communityRef = document.getElementById('community');
      communityRef.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  const handleCardExpansion = (index) => {
    setCardState(index)
  }


  const cardDetails = [
    {
      title: "Sign up",
      description: "To get started, simply sign up on our website - it's quick, easy, and free! Once you've signed up, start exploring our course roadmap and choose the course that interests you the most."
    },
    {
      title: "Select a preferred roadmap",
      description: " We offer comprehensive course roadmaps designed specifically for beginners and experienced techies. When you sign up, you'll be prompted to select your preferred roadmap, but don't worry if you change your mind later - you can always switch to a different roadmap that better suits your needs. We want you to have the best possible learning experience, so feel free to explore our different roadmaps and find the one that's right for you."
    },
    {
      title: "Start Learning",
      description: "Once you've selected your preferred roadmap, it's time to start learning! Our courses are broken down into easy-to-follow modules, each covering a different topic in the latest technologies. With our step-by-step approach, you'll quickly gain the knowledge and skills you need to succeed in the tech industry. So don't wait - start learning today and take the first step towards achieving your tech dreams!"
    },
  ]
  // const blogCardDetails = [
  //   {
  //     image: Blog,
  //     category: "news",
  //     title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
  //     description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
  //     avater: AuthorAvatar,
  //     author: "Prince Chijioke",
  //     time: "Mon, 26 Jan 2023"
  //   },
  //   {
  //     image: Blog,
  //     category: "products",
  //     title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
  //     description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
  //     avater: AuthorAvatar,
  //     author: "Prince Chijioke",
  //     time: "Mon, 26 Jan 2023"
  //   },
  //   {
  //     image: Blog,
  //     category: "tech",
  //     title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
  //     description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
  //     avater: AuthorAvatar,
  //     author: "Prince Chijioke",
  //     time: "Mon, 26 Jan 2023"
  //   },
  // ]
  return (
    <LandingMainContainer>
     
      <LandingFirstContainer>
        <div>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >UNLEASH YOUR POTENTIAL</p>
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="100"
          >Join our community and build real life projects with a team</h2>
        </div>
        <div>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >Are you ready to turn your tech dreams into a reality? We're here to help.
            With our comprehensive and accessible roadmaps, you can learn the latest
            technologies and achieve your goals in no time
          </p>
          <Button
            primary
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="120"
            onClick={()=>setIsModalOpen(true)}
          >Get started now</Button>
        </div>
      </LandingFirstContainer>
      <LandingVideoIllustratorContainer>
        <LandingIllustrator>

        </LandingIllustrator>
      </LandingVideoIllustratorContainer>
      <LandingWhatWeDo>
        <LandingWhatWeDoContainer>
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
        </LandingWhatWeDoContainer>
        <LandingWhatWeDoCardContainer>
          <LandingWhatWeDoCard
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
          </LandingWhatWeDoCard>
          <LandingWhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="140"
          >
            <PortfolioIcon />
            <h4>Portfolio Manager</h4>
            <p>Generate a portfolio that showcases all the skills you've learned
              and the projects you've worked on.
              Our portfolio manager is more than just a resume - it's a proof
              of learning document that demonstrates your proficiency
              in the latest technologies.
            </p>
          </LandingWhatWeDoCard>
          <LandingWhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="160"
          >
            <LeaderboardIcon />
            <h4>Leaderboard</h4>
            <p>Compete with other techies and see how you rank on Codetivite's real-time leaderboard.
              Our leaderboard tracks your progress in courses and builder's
              program, motivating you to climb to the top
            </p>
          </LandingWhatWeDoCard>
        </LandingWhatWeDoCardContainer>
      </LandingWhatWeDo>
      <HowToGetStartedContainer>
        <HowToGetStartedBackground>
          <img src={GreenLogo} alt={"Greeen"} />
          <img src={GreenLogo} alt={"Green"} />
        </HowToGetStartedBackground>
        <HowToGetStartedContent>
          <HowToGetStartedDetails
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-easing="ease-in-out"
          >
            <p>HOW TO GET STARTED</p>
            <h3>Join Codetivite today and start your journey towards tech success!</h3>
            <p>Once you sign up on our website, you'll be able to take a clarity test to determine
              which part of tech you should focus on. Our course roadmap is broken down
              into easy-to-follow modules covering a wide range
              of topics in the latest technologies.
            </p>
            <div>
              <Button
                primary
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay="120"
                onClick={() => setIsModalOpen(true)}
              >Get started</Button>              
              {/* <Button>Take clarity test</Button> */}
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
      <CommunityContainer
        id='community'
        ref={communityRef}
      >
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
          <p>Join our growing community of techies at Codetivite! We're passionate about learning
            and collaboration and offer comprehensive course roadmaps, builder's program,
            and leader-board to help you succeed in the tech industry.
            Whether you're a beginner or an experienced techie,
            we welcome you to join us today!
          </p>
          <Button onClick={() => {
            window.open('https://twitter.com/codetivite', '_blank');
          }}>Join our Community</Button>
        </CommunityCollaborateDetails>
      </CommunityContainer>
      <LandingCarouselContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            renderBullet: (index, className) =>
              `<span 
              class="${className}" 
              style="background-color: var(--primary);
              margin-top:40px;"> 
              </span>`
          }}
          modules={[Pagination, Navigation]}
          className={"mySwiper"}
        >
          <Slide>
            <LandingCarouselElement>
              <h5>
                “Codetivite gave me my first real life experience as a technical writer. The roadmap was broken down in a way that was easy to understand. The learning was self paced and every module came with its own tasks. I loved the experience!”
              </h5>
              <h6>Okoli Kosisochukwu</h6>
              <p>Technical Writer</p>
            </LandingCarouselElement>
          </Slide>
          <Slide>
            <LandingCarouselElement>
              <h5>
                “Codetivite is revolutionary! The literal meaning of digital internships. Where else can you get real life experience to put you ahead in your career.”
              </h5>
              <h6>Okorie Rachel</h6>
              <p>Backend Engineer</p>
            </LandingCarouselElement>
          </Slide>
          <SwiperSlide>
            <LandingCarouselElement>
              <h5>
                “Where would I have been without codetivite!”
              </h5>
              <h6>Victor Ama</h6>
              <p>Frontend Developer</p>
            </LandingCarouselElement>
          </SwiperSlide>
          {/* <SwiperSlide>
            <LandingCarouselElement>
              <h5>
                “Lorem ipsum dolor sit amet consectetur.
                Auctor viverra in sagittis rhoncus pellentesque turpis dignissim commodo sit.
                Eget erat bibendum justo quis quam orci nunc volutpat pulvinar.
                Aliquam aliquam cursus hac a nulla diam eu cursus lectus.”
              </h5>
              <h6>Prince Chijioke</h6>
              <p>Product Designer</p>
            </LandingCarouselElement>
          </SwiperSlide> */}
          <PrevArrow className="prev">{<LeftArrow />}</PrevArrow>
          <NextArrow className="next">{<RightArrow />}</NextArrow>
        </Swiper>
      </LandingCarouselContainer>
      {/* <LandingBlogContainer>
        <BlogContainer>
          <div>
            <p>OUR BLOG</p>
            <h4>Read our Latest and Informative Posts</h4>
          </div>
          <Button primary
            onClick={() => navigate("/our-blog")}
          >
            Visit our blog
          </Button>
        </BlogContainer>
        <LandingBlogCardContainer>
          {
            blogCardDetails.map((card, index) =>
              <BlogCards
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                image={card.image}
                category={card.category}
                title={card.title}
                description={card.description}
                avater={card.avater}
                author={card.author}
                time={card.time}
              />
            )
          }
        </LandingBlogCardContainer>
      </LandingBlogContainer> */}
    </LandingMainContainer>
  )
}

export default LandingPage