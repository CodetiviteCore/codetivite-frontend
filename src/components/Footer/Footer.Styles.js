import styled, { css } from 'styled-components';
import { devices } from '../../utils/MediaQueiyBreakPoints';

export const FooterContainer = styled.div`
	padding: 4% 8%;
	position: relative;
	color: var(--white);
	p,
	h2 {
		color: var(--white);
	}
`;
export const FooterImageContainer = styled.div`
    width: 21.18rem;
    height:21.93;
    position: relative;
    @media ${devices.tabletL} {
        display:none ;
    }
`
export const FooterImage = styled.img`
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	user-drag: none;
`;
export const FooterClips = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: var(--white);
	position: absolute;
	${(props) =>
		props.portfolio &&
		css`
			top: 89px;
			left: -90px;
		`} ${(props) =>
			props.roadmap &&
			css`
				top: 21px;
				right: -70px;
			`} ${(props) =>
			props.leaderboard &&
			css`
				bottom: 26px;
				right: -70px;
			`} padding: 0.68rem 1rem;
	border-radius: 6.25rem;
`;
export const FooterIconBody = styled.div`
	width: 2.12rem;
	height: 2.12rem;
	background-color: var(--footer-blue);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;
export const FooterClipTitle = styled.h6`
	font-size: 1rem;
	font-weight: 600;
	color: var(--heading-black);
`;
export const FooterBackground = styled.div`
	position: absolute;
	z-index: -2;
	background-color: var(--blue);
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	img:first-child {
		position: absolute;
		bottom: 0;
		width: 450px;
		height: 450px;
		object-fit: contain;
		object-position: left;

        @media ${devices.tabletL}{
            width:200px;
            height:200px;
        }
    }
    img:last-child{
        position: absolute;
        top:0;
        right:0;
        transform: rotate(180deg) ;
        width:450px;
        height:450px;
        object-fit:contain;
        object-position:left;
        
        @media ${devices.tabletL}{
            width:200px;
            height:200px;
        }
        
    }

`
export const FooterDetails = styled.div`
    position:relative;
    z-index:2;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:86px;
    @media ${devices.tabletL}{
        margin:0 auto;
    }
`
export const FooterGetStarted = styled.div`
    max-width:36.5rem;
    h2{
        font-size:1.75rem;
        width:36.5rem;
        line-height: 1.2;
        margin-bottom: 1rem;
        @media ${devices.tabletL} {
            font-size:1.6rem ;
            width:350px;
            line-height:1.5  ;
        }
    }
    p{
        margin-top:0.5rem;
        max-width:36.5rem;
        @media ${devices.tablet} {
            font-size:1rem;
        }
    }
`
export const FooterButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
	margin-top: 2rem;
`;
export const FooterLinksContainers = styled.section`
    display:flex;
    justify-content:space-between ;
    margin-top:63px;
    @media ${devices.tabletL}{
        width:100%;
        flex-wrap:wrap;
        /* flex-direction:column; */
        /* align-items:center;
        justify-content:space-between; */
    }
    &>section{
        display:flex;
        gap:92px;
        @media ${devices.tabletL}{
            gap:110px;
            margin-top:23px ;
        }
    }
    &>section:last-child{
        @media ${devices.tablet}{
            justify-content:space-between ;
            margin-top:41px;
        }
    }
    
`
export const FootLinksLogoDetails = styled.div`
    h1{
        font-size:1.7rem;
        color: var(--white);
    }
    p{
        @media ${devices.tablet}{
            font-size:1rem;
        }
    }
    width: 28.8rem;
    @media ${devices.tabletL}{
        width:100%;
    }
`
export const FooterLinkList = styled.ul`
    list-style: none;
`
export const FooterLinkItem = styled.li`
	color: var(--white);
	margin-top: 1rem;
	@media ${devices.tablet} {
		font-size: 1rem;
	}
`;
export const CopyRight = styled.p`
    text-align:center;
    margin-top:3.125rem ;
    @media ${devices.tabletL}{
        font-size:12px;
        margin:5% auto;
    }
`
export const NewsletterOuterContainer = styled.section`
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
		url("https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80");
	background-size: cover;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding: 0 8%;
`;
export const NewsletterContainer = styled.div`

    h4{
        font-size: 3rem;
        color: var(--white);
    }
    p{
        color: var(--white);
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 3rem;
        width:60%;
        text-align:center;
        margin: 1.5% auto;
    }
    >div{
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    @media ${devices.tabletL}{
        h4{
            font-size: 2rem;
        }
        p{
            font-size: 0.8rem;
        }
        >div{
            flex-wrap: wrap;
        }
    }
