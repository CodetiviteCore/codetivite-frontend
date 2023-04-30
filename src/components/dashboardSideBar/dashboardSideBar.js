import styled from "styled-components"
import {
    BlackLogo,
    CommunityIcon,
    DashboardIcon,
    DashboardLeaderboard,
    EventsIcon,
    MyProfileIcon,
    OurBlogIcon,
    RoadmapDashboardIcon,
    Settings
} from "../../assets/svgs"
import { DashboardMenuItem } from "../../ui_elements"
import { Link } from 'react-router-dom';


const SideBarContainer = styled.aside`
    height: 100vh;
    position: relative;
    background-color: var(--white);
    width: 12.6rem;
    transition: all .5s ease;
    border-right: 1px solid var(--navborders);

`
const LogoContainer = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding: 20px;
    transition: all 0.3s ease ;
    
`

const Logo = styled.h1`
    font-size: 1.4rem;
    transition: all .5s ease;

`

export const DashboardSideBar = ({ show }) => {

    const menus = [
        {
            path: "/dashboard",
            title: "Dashboard",
            icon: <DashboardIcon />
        },
        {
            path: "/events",
            title: "Events",
            icon: <EventsIcon />
        },
        {
            path: "/community",
            title: "Community",
            icon: <CommunityIcon />
        },
        {
            path: "/our-blog",
            title: "Our blog",
            icon: <OurBlogIcon />
        },
        {
            path: "/roadmap",
            title: "Roadmap",
            icon: <RoadmapDashboardIcon />
        },
        {
            path: "/leaderboard",
            title: "Leaderboard",
            icon: <DashboardLeaderboard />
        },
        {
            path: "/profile",
            title: "My Profile",
            icon: <MyProfileIcon />
        },
        {
            path: "/settings",
            title: "Settings",
            icon: <Settings />
        },
    ]
    return (
        <SideBarContainer>
            <LogoContainer to={"/"}>
                {
                    show ?
                        <BlackLogo style={{width:"25px",height:"25px"}} />
                        :
                        <Logo show={show}>C<span><BlackLogo /></span>detivite</Logo>
                }
            </LogoContainer>
            <section>
                {
                    menus.map(({ path, title, icon }, index) => <DashboardMenuItem
                        icon={icon}
                        title={title}
                        path={path}
                        key={index}
                    />)
                }

            </section>

        </SideBarContainer>
    )/*  */
}