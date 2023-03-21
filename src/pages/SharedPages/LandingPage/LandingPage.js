import {  useContext, useState } from 'react'
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
  LandingBlogContainer,
  LandingBlogCard,
  BlogContainer,
  LandingBlogCardContainer,
  LandingModal
} from './LandingPage.Styles';
import { Button, LandingCard } from '../../../ui_elements/index';
import {
  Audio,
  Google,
  LandingModalLogoLeft,
  LandingModalLogoRight,
  LeaderboardIcon,
  LeftArrow,
  PortfolioIcon,
  RightArrow,
  RoadmapIcon,
} from '../../../assets/svgs';
import GreenLogo from "../../../assets/images/greenLargeLogo.png"
import Call from "../../../assets/images/call.png"
import Alex from "../../../assets/images/alex.png"
import Ayo from "../../../assets/images/ayo.png"
import Sophia from "../../../assets/images/sophia.png"
import Tina from "../../../assets/images/tima.png"
import Tobi from "../../../assets/images/toib.png"
import Toks from "../../../assets/images/toks.png"
import Tunji from "../../../assets/images/tunji.png"
import Blog from "../../../assets/images/blogPicture.png"
import AuthorAvatar from "../../../assets/images/blogAvatar.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'aos/dist/aos.css';
import { Modal } from '../../../components';
import { ModalContext } from '../../../context/ModalContext';
// import { Puff } from 'react-loader-spinner';
// import { signUpWithGoogle } from '../../../Redux store/auth/auth.action';
import { BASE_URL } from './../../../utils/urls';






const LandingPage = () => {
  const { isModalOpen } = useContext(ModalContext)
  const [cardState, setCardState] = useState(0)
  
  


  const redirect = () => {
    window.location.href = `https://codetivite-api2.onrender.com/login`
  }




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
  const blogCardDetails = [
    {
      image: Blog,
      category: "news",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: Blog,
      category: "products",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: Blog,
      category: "tech",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
  ]
  return (
    <LandingMainContainer>
      <Modal isOpen={isModalOpen}>
        <LandingModal>

          <div>
            <LandingModalLogoLeft className='left' />
            <LandingModalLogoRight className='right' />
          </div>
          <div>
            <h4>Continue with your Google account.</h4>
            <p>Getting started and getting back into your account has been simplified.
              Continue using your google account.
            </p>
            <button onClick={redirect}>
              {/* {
                      isLoadingUser ? <Puff
                        height="40"
                        width="40"
                        radius={1}
                        color="var(--white)"
                        ariaLabel="puff-loading"
                        wrapperStyle={{ backgroundColor: "transparent" }}
                        wrapperClass=""
                        visible={true}
                      />
                        : */}
              <>
                <Google />
                <p>Continue with your Google account</p>
              </>
              {/* } */}

            </button>
          </div>

        </LandingModal>
      </Modal>
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
          >Lorem ipsum dolor sit amet consectetur. Senectus orci scelerisque lectus tortor tellus magnis. Molestie porta purus nunc vestibulum ante lacus. </p>
          <Button
            primary
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="120"
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
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </LandingWhatWeDoCard>
          <LandingWhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="140"
          >
            <PortfolioIcon />
            <h4>Portfolio Manager</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Commodo pharetra ultricies senectus est dolor id.</p>
          </LandingWhatWeDoCard>
          <LandingWhatWeDoCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="160"
          >
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
          <HowToGetStartedDetails
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-easing="ease-in-out"
          >
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
                “Lorem ipsum dolor sit amet consectetur.
                Auctor viverra in sagittis rhoncus pellentesque turpis dignissim commodo sit.
                Eget erat bibendum justo quis quam orci nunc volutpat pulvinar.
                Aliquam aliquam cursus hac a nulla diam eu cursus lectus.”
              </h5>
              <h6>Prince Chijioke</h6>
              <p>Product Designer</p>
            </LandingCarouselElement>
          </Slide>
          <Slide>
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
          </Slide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <PrevArrow className="prev">{<LeftArrow />}</PrevArrow>
          <NextArrow className="next">{<RightArrow />}</NextArrow>
        </Swiper>
      </LandingCarouselContainer>
      <LandingBlogContainer>
        <BlogContainer>
          <div>
            <p>OUR BLOG</p>
            <h4>Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.</h4>
          </div>
          <Button primary>Visit our blog</Button>
        </BlogContainer>
        <LandingBlogCardContainer>
          {
            blogCardDetails.map((card, index) =>
              <LandingBlogCard
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <img src={card.image} alt={"Blog media"} />
                <h6>{card.category.toLocaleUpperCase()}</h6>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
                <hr />
                <div>
                  <img src={card.avater} alt={"auther media"} />
                  <div>
                    <h5>{card.author}</h5>
                    <p>{card.time}</p>
                  </div>
                </div>
              </LandingBlogCard>)
          }
        </LandingBlogCardContainer>
      </LandingBlogContainer>
    </LandingMainContainer>
  )
}

export default LandingPage