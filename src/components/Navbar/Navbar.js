import {
  useState,
  useEffect,
  useContext,
  useLayoutEffect
} from 'react';
import {
  NavLink,
  useSearchParams,
  // useNavigate
} from 'react-router-dom';

import styled from "styled-components";

import { BlackLogo } from '../../assets/svgs';
import { Button } from '../../ui_elements';
import { devices } from './../../utils/MediaQueiyBreakPoints';
import { ModalContext } from '../../context/ModalContext';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux store/auth/auth.selector';
// import { useApiGet } from '../../custom-hooks/useApiGet';
// import {getUserDetailsFromAuth} from "../../api/apiCalls"
import Avatar from 'react-avatar';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { BASE_URL } from '../../utils/urls';


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsModalOpen } = useContext(ModalContext)
  // const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // const navigate = useNavigate();
  // const [authToken, setAuthToken] = useState("")
  const user = useSelector(selectUser)
  const [usernames, setUsernames] = useState({
    firstname: "",
    lastname: ""
  })

  
  // const onSuccess = (data) => {
  //   console.log("Perform side effect after data fetching",data)
  // }

  // const onError = (error) => {
  //   console.log("Perform side effect after data fetching Error",error)
  // }

  // const { data,refetch } = useApiGet(onSuccess,onError,"googleAuth",getUserDetailsFromAuth(authToken))
  // console.log(user)

  
  
  useEffect(() => {
    const refresh = searchParams.toString() === "";
    if (!refresh) {
      //    setAuthToken(searchParams.get("token"))
      //    refetch()
      //    navigate("/")
      const queryString = searchParams.get("code")
      console.log("my query string", queryString)
        // const urlParam = new URLSearchParams(queryString)
        // console.log("my query string param", urlParam)
      // setAuthToken(queryString)
      const makeAPICall = () => {
        console.log("function")
        axios.get(`https://codetivite-api2.onrender.com/auth?code=${queryString}`)
        .then(response => console.log("response", response))
        .catch(e => console.log("errro", e))
        .finally(() => console.log("nothing happened"))
      }
      makeAPICall()
      
    }

    // refetch()
    // navigate("/")
  
 },[searchParams])
 


  useLayoutEffect(() => {

    if (user) {
      console.log(user, "user")
      const { firstName, lastName } = user
      setUsernames({
        firstname: firstName,
        lastname: lastName
      })
    }

  }, [user])



  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 400;
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

  //git




  return (
    <NavigationBar scrolled={scrolled}>
      <Logo>c<span><BlackLogo /></span>detivite</Logo>
      <HamburgerContainer onClick={handleHamburgerClick}>
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
      </HamburgerContainer>
      <NavListContainer isMenuOpen={isMenuOpen}>
        <NavList>
          <NavItem>Our community</NavItem>
          <NavItem>Clarity test</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact us</NavItem>
          <NavItem>Our blog</NavItem>
        </NavList>
        {
          user ?
            <NavAvatar
              name={`${usernames.firstname} ${usernames.lastname}`}
              round={true}
              size="40"
              fgColor='	#FFF'
            />
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
  width:${({ scrolled }) => (scrolled ? "-webkit-fill-available" : "initial")};
  height:10vh;
  padding:0 8%;
  transition: all 0.5s ease;
  z-index: 10;
  @media ${devices.tablet}{
    flex-wrap:wrap;
  }
  

`;
const Logo = styled.h1`
  font-size:1.5rem ;
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
