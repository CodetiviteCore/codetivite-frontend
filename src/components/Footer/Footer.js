import "./Footer.Styles"
import { Button } from "../../ui_elements"
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
    CopyRight
} from "./Footer.Styles"
import FImage from "../../assets/images/footerImage.png"
import FooterBriefcase from "../../assets/images/briefcase.png"
import FooterBook from "../../assets/images/book.png"
import FooterAward from "../../assets/images/award.png"
import LightLogoPng from "../../assets/images/lightlogo.png"
import FooterLargeLogo from "../../assets/images/footerLargeLogo.png"
export const Footer = () => {
    return (
        <FooterContainer>
            <FooterBackground>
                <img src={FooterLargeLogo} alt={"the"} />
                <img src={FooterLargeLogo} alt={"the"} />
            </FooterBackground>
            <FooterDetails>
                <FooterImageContainer>
                    <FooterImage src={FImage} alt={"footer pic"} />
                    <FooterClips portfolio>
                        <FooterIconBody>
                            <img src={FooterBriefcase} alt={"Briefcase"} />
                        </FooterIconBody>
                        <FooterClipTitle>Portfolio</FooterClipTitle>
                    </FooterClips>
                    <FooterClips roadmap>
                        <FooterIconBody>
                            <img src={FooterBook} alt="book" />
                        </FooterIconBody>
                        <FooterClipTitle>Roadmap</FooterClipTitle>
                    </FooterClips>
                    <FooterClips leaderboard>
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
                        Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet vitae etiam quis. Faucibus pellentesque tristique scelerisque in tortor. Vitae mattis sit lobortis ipsum elit.
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
                        Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet vitae etiam quis. Faucibus pellentesque.
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
                            <FooterLinkItem>LinkedIN</FooterLinkItem>
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
    )
}