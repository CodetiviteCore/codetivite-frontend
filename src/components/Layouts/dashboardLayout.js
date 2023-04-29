import styled from "styled-components"
import { DashboardSideBar } from "../dashboardSideBar/dashboardSideBar"
import { DashboardNavabar } from '../dashboardNavbar/dashboardNavbar';
import { useState } from "react";


const LayoutBody = styled.div`
    display: flex;
    max-height: 100vh !important;
    background-color: var(--deep-white);
    position:relative;
   
`
const MainContainer = styled.div`
    z-index:5;
    width:${({ show }) => show ? "120%" : "80%"};
    position: absolute;
  top: 0;
  left: ${({ show }) => (show ? "100px" : "12.7rem")};
  width: stretch;
  height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Toggler = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--white);
    border: 1px solid var(--gray-black);
    position: absolute;
    top: 20%;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .6s ease;
    &:hover{
        cursor: pointer;
        transform:${({ show }) => show ? "translateX(5px)" : "translateX(-7px)"}; 
    }
    p{
        font-weight: 700;
    }
    
`
export const DashboardLayout = ({ children }) => {
    const [show, setShow] = useState(true)
    const toggleShowSideBar = () => {
        setShow(!show)
        console.log(show)

    }
    return (
        <LayoutBody>
            <DashboardSideBar />
            <MainContainer>
                <Toggler onClick={toggleShowSideBar}>
                    {
                        show
                            ?
                            <p>&lt;</p>
                            :
                            <p>&gt;</p>
                    }
                </Toggler>
                <DashboardNavabar />
                {children}
            </MainContainer>

        </LayoutBody>
    )
}