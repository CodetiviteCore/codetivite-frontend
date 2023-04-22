import {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useCallback
} from 'react';
import {
  NavLink,
  useSearchParams,
  useNavigate,
  Link
} from 'react-router-dom';

import styled from "styled-components";

import { BlackLogo } from '../../assets/svgs';
import { Button } from '../../ui_elements';
import { devices } from './../../utils/MediaQueiyBreakPoints';
import { ModalContext } from '../../context/ModalContext';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux store/auth/auth.selector';
import { useApiGet } from '../../custom-hooks/useApiGet';
import Avatar from 'react-avatar';
import 'react-toastify/dist/ReactToastify.css';
import AuthServices from '../../services/authServices';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  careerPathSelectState,
  logoutUser,
  signUpWithGoogle
} from '../../Redux store/auth/auth.action';
import Cookies from 'js-cookie';





export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setIsModalOpen, setEmailModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [usernames, setUsernames] = useState({
    firstname: "",
    lastname: ""
  });

  //api call
  const { data: authResponse, refetch: fetchToken } = useApiGet("Auth", () => AuthServices.getUserDetails(searchParams.get("code")));

  //sign up process
  const getUserfromEmail = useCallback(() => {
    const authToken = searchParams.get("token")
    Cookies.remove("authToken")
    Cookies.set("authToken", authToken, { secure: true })

    const userDetails = jwtDecode(authToken);
    dispatch(signUpWithGoogle(userDetails?.profile));
    if (!userDetails?.profile?.careerPath) {
      dispatch(careerPathSelectState(true));
      navigate("/preferences", { replace: true });
    }
  }, [dispatch, navigate, searchParams]);

  //Get user details login proccess... normal flow
  const getUser = useCallback(() => {
    if (authResponse?.sentEmail) {
      setEmailModal(true);
      setIsModalOpen(true);
      navigate("/", { replace: true });
    }

    else if (authResponse?.authToken) {
      Cookies.remove("authToken")
      Cookies.set("authToken", authResponse?.authToken, { secure: true })
      const userDetails = jwtDecode(authResponse?.authToken);
      dispatch(signUpWithGoogle(userDetails?.profile));

      if (!userDetails?.profile?.careerPath) {
        dispatch(careerPathSelectState(true));
        navigate("/preferences", { replace: true });
      }
      else if (userDetails?.profile?.careerPath) {
        dispatch(careerPathSelectState(true))
      }

      navigate("/", { replace: true });

    }
  }, [
    authResponse?.authToken,
    authResponse?.sentEmail,
    dispatch,
    navigate,
    setEmailModal,
    setIsModalOpen
  ]);

  useEffect(() => {
    //get user details useEffect
    if (searchParams.get("token")) {
      getUserfromEmail();
    } else if (searchParams.get("code")) {
      fetchToken();
      getUser();
    }
  }, [getUser, getUserfromEmail, searchParams, fetchToken]);

  useLayoutEffect(() => {
    if (user) {
      const { firstName, lastName } = user;
      setUsernames({
        firstname: firstName,
        lastname: lastName
      });
    }
  }, [user]);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);



  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }



  return (
    <NavigationBar scrolled={scrolled}>
      <Logo to={"/"}>c<span><BlackLogo /></span>detivite</Logo>
      <HamburgerContainer onClick={handleHamburgerClick}>
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
      </HamburgerContainer>
      <NavListContainer isMenuOpen={isMenuOpen}>
        <NavList>
          <NavItem to={"/#community"}>Our community</NavItem>
          <NavItem to={"/clarity-test"}>Clarity test</NavItem>
          <NavItem to={"/about-us"}>About</NavItem>
          <NavItem to={"/contact-us"}>Contact us</NavItem>
          <NavItem to={"/our-blog"}>Our blog</NavItem>
        </NavList>
        {
          user ?
            <AvatarContainer>
              <NavAvatar
                onClick={toggleDropdown}
                name={`${usernames.firstname} ${usernames.lastname}`}
                round={true}
                size="40"
                fgColor='	#FFF'
              />
              <LogoOutDropDown
                isDropdownOpen={isDropdownOpen}
              >
                <p onClick={() => dispatch(logoutUser)}>Logout</p>
                <hr />
                <DashboardLink to={"/dashboard"}>Dashboard</DashboardLink>
              </LogoOutDropDown>
            </AvatarContainer>
            :
            <Button
              scrolled={scrolled}
              onClick={openModal}
            >
              Login or Sign up
            </Button>
        }

      </NavListContainer>

    </NavigationBar>
  );
};


const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color: ${({ scrolled }) => (scrolled ? "var(--primary-light)" : "transparent")};
  position: ${({ scrolled }) => (scrolled ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width:${({ scrolled }) => (scrolled ? "stretch" : "initial")};
  height:10vh;
  padding:0 8%;
  transition: all 0.5s ease;
  z-index: 10;
  @media ${devices.tablet}{
    flex-wrap:wrap;
  }
`;
const Logo = styled(Link)`
  font-size:1.5rem ;
  font-weight: 800;
  color:black;
  display:flex;
  align-items:center ;
  span{
    padding-top:8px ;
  }

`
const NavList = styled.ul`
  list-style:none;
  display:flex;
  gap: 40px;
  @media ${devices.tablet}{
    display: flex;
    flex-direction: column;
  
  }
`
const NavListContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between ;
  width:72%;
  transition: all 2s ease-in-out;
  @media ${devices.tablet}{
    position:fixed;
    top:10vh;
    left: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};
    display:${({ isMenuOpen }) => isMenuOpen ? "flex" : "none"};
    flex-direction: column;
    justify-content:space-around ;
    align-items:center ;
    background-color:var(--primary);
    transition: all 2s ease-in-out;
    height:${({ isMenuOpen }) => isMenuOpen ? "100vh" : "0"};
    width:${({ isMenuOpen }) => isMenuOpen ? "100%" : "0"};
  }
`
const NavItem = styled(NavLink)`
  text-decoration:none;
  position:relative;
  font-size:1rem ;
  &.active {
    color: var(--primary);
  }
  &::before{
    position: absolute;
    content: "";
    left: 0;
    bottom: -3px;
    width: 80%;
    height: 4px;
    border-radius: 5px;
    background-color: var(--primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.6s;
  }
  &:hover::before{
    transform: scaleX(1);
  }

  @media ${devices.tablet}{
    color:var(--white);
    text-align:center;
    font-size:1rem;
  }
`
const HamburgerContainer = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display:none ;
  @media ${devices.tablet}{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const NavAvatar = styled(Avatar)`
  :hover{
    cursor: pointer;
  }
  span{
    color:var(--white) !important;
  }
  `

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:first-child {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '')};
  }

  &:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
  }

  &:last-child {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '')};
  }
`;

const LogoOutDropDown = styled.div`
  background-color: var(--white);
  border-radius: 1px solid var(--navborders); 
  height:auto;
  padding: 1rem;
  display: ${({ isDropdownOpen }) => isDropdownOpen ? "block" : "none"};
  position: absolute;
  bottom: -130px;
  right: 0;
  box-shadow: -1px 4px 5px -3px rgba(0,0,0,0.31);
  -webkit-box-shadow: -1px 4px 5px -3px rgba(0,0,0,0.31);
  -moz-box-shadow: -1px 4px 5px -3px rgba(0,0,0,0.31);
  p{
    font-size: 1rem;
    margin: 10px 0;
    font-weight: 600;
    cursor: pointer;
  }
  
  hr{
    opacity: 0.3;
  }
`
const AvatarContainer = styled.div`
  position: relative;
`
const DashboardLink = styled(Link)`
     font-size: 1rem;
    margin: 10px 0;
    font-weight: 600;
    cursor: pointer;
    text-decoration:none;
`