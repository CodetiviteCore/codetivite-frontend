import "./Footer.Styles"
import { Button, FooterInput } from "../../ui_elements"
import {
    FooterClips,
    FooterIconBody,
    FooterImageContainer,
    FooterClipTitle,
    FooterDetails,
    FooterContainer,
    FooterBackground,
    FooterImage,
    FooterGetStarted,
    FooterButtonContainer,
    FooterLinksContainers,
    FooterLinkList,
    FooterLinkItem,
    FootLinksLogoDetails,
    CopyRight,
    NewsletterContainer,
    NewsletterOuterContainer,
    FooterOuterContainer
} from "./Footer.Styles"
import FImage from "../../assets/images/footerImage.png"
import FooterBriefcase from "../../assets/images/briefcase.png"
import FooterBook from "../../assets/images/book.png"
import FooterAward from "../../assets/images/award.png"
import LightLogoPng from "../../assets/images/lightlogo.png"
import FooterLargeLogo from "../../assets/images/footerLargeLogo.png"
export const Footer = () => {
    return (
        <FooterOuterContainer>
            <NewsletterOuterContainer>
                <NewsletterContainer>
                    <h4>Subscribe To Our Newsletter</h4>
                    <p>Stay up-to-date with the latest news, updates,
                        and exclusive offers from Codetivite by subscribing to our newsletter.
                    </p>
                    <div>
                        <FooterInput
                            placeholder={"Enter your email"}
                        />
                        <Button newsLetter>Subscribe</Button>
                    </div>

                </NewsletterContainer>
            </NewsletterOuterContainer>
            <FooterContainer>
                <FooterBackground>
                    <img src={FooterLargeLogo} alt={"the"} />
                    <img src={FooterLargeLogo} alt={"the"} />
                </FooterBackground>
                <FooterDetails>
                    <FooterImageContainer>
                        <FooterImage src={FImage} alt={"footer pic"}
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-easing="ease-in-out"
                        />
                        <FooterClips
                            portfolio
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="200"

                        >
                            <FooterIconBody>
                                <img src={FooterBriefcase} alt={"Briefcase"} />
                            </FooterIconBody>
                            <FooterClipTitle>Portfolio</FooterClipTitle>
                        </FooterClips>
                        <FooterClips
                            roadmap
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="600"
                        >
                            <FooterIconBody>
                                <img src={FooterBook} alt="book" />
                            </FooterIconBody>
                            <FooterClipTitle>Roadmap</FooterClipTitle>
                        </FooterClips>
                        <FooterClips
                            leaderboard
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="900"
                        >
                            <FooterIconBody>
                                <img src={FooterAward} alt="Award" />
                            </FooterIconBody>
                            <FooterClipTitle>Leaderboard</FooterClipTitle>
                        </FooterClips>
                    </FooterImageContainer>
                    <FooterGetStarted>
                        <h2>
                            Join other creatives at Codetivite to create amazing projects.
                        </h2>
                        <p>
                            Are you a creative looking for a community to collaborate and build amazing projects with?.
                            Look no further than Codetivite!. Our builder's program is the perfect place to unleash your
                            creativity and develop your skills. Sign up today and let's create something great together.
                        </p>
                        <FooterButtonContainer>
                            <Button primary>Get started</Button>
                            <Button>Contact us</Button>
                        </FooterButtonContainer>
                    </FooterGetStarted>
                </FooterDetails>
                <FooterLinksContainers>
                    <FootLinksLogoDetails>
                        <h1>c<span><img src={LightLogoPng} alt="Footer logo" /></span>detivite</h1>
                        <p>
                            Codetivite is a tech learning platform designed to help beginners achieve their
                            dream by providing comprehensive, yet accessible content.
                            We offer a builder's program to help techies learn and practice by
                            solving real-life problems.
                        </p>
                    </FootLinksLogoDetails>
                    <section>
                        <div>
                            <h3>CODETIVITE</h3>
                            <FooterLinkList>
                                <FooterLinkItem>About us</FooterLinkItem>
                                <FooterLinkItem>Our blog</FooterLinkItem>
                                <FooterLinkItem>Clarity test</FooterLinkItem>
                                <FooterLinkItem>Our community</FooterLinkItem>
                            </FooterLinkList>
                        </div>
                        <div>
                            <h3>SUPPORT</h3>
                            <FooterLinkList>
                                <FooterLinkItem>FAQs</FooterLinkItem>
                                <FooterLinkItem>Contact us</FooterLinkItem>
                                <FooterLinkItem>Privacy policy</FooterLinkItem>
                            </FooterLinkList>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3>SOCIALS</h3>
                            <FooterLinkList>
                                <FooterLinkItem>LinkedIn</FooterLinkItem>
                                <FooterLinkItem>Twitter</FooterLinkItem>
                                <FooterLinkItem>Instagram</FooterLinkItem>
                            </FooterLinkList>
                        </div>
                        <div>
                            <h3>GET STARTED</h3>
                            <FooterLinkList>
                                <FooterLinkItem>Sign up</FooterLinkItem>
                                <FooterLinkItem>Sign in</FooterLinkItem>
                            </FooterLinkList>
                        </div>

                    </section>

                </FooterLinksContainers>
                <CopyRight>© 2023 Codetivite. All rights reserved</CopyRight>
            </FooterContainer>
        </FooterOuterContainer>

    )
}