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
import { useState } from 'react';
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
    padding: 1.3rem;
`

// const Toggler = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: var(--white);
//     border: 1px solid var(--gray-black);
//     position: absolute;
//     top: 20%;
//     right: -10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all .6s ease;
//     &:hover{
//         cursor: pointer;
//         transform:${({show})=> show ? "translateX(5px)":"translateX(-7px)"}; 
//     }
//     p{
//         font-weight: 700;
//     }
    
// `
const Logo = styled.h1`
    font-size: 1.4rem;
    transition: all .5s ease;

`

export const DashboardSideBar = () => {
    const [show, setShow] = useState(true)
    const toggleShowSideBar = () => {
        setShow(!show)
    }
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
                {/* {
                    show ?
                        <Logo show={show}>C<span><BlackLogo /></span>detivite</Logo>
                        :
                        <BlackLogo />
                } */}
                <Logo>C<span><BlackLogo /></span>detivite</Logo>

            </LogoContainer>
            {/* <Toggler onClick={toggleShowSideBar}>
                {
                    show
                        ?
                        <p>&lt;</p>
                        :
                        <p>&gt;</p>
                }
            </Toggler> */}
            <section>
                {
                    menus.map(({ path, title, icon }, index) => <DashboardMenuItem
                        icon={icon}
                        title={title}
                        path={path}
                        show={show}
                        key={index}
                    />)
                }

            </section>

        </SideBarContainer>
    )/*  */
}