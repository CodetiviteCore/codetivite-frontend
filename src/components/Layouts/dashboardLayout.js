import styled from "styled-components";
import { DashboardSideBar } from "../dashboardSideBar/dashboardSideBar";
import { DashboardNavabar } from "../dashboardNavbar/dashboardNavbar";
import { useState } from "react";

const LayoutBody = styled.div`
  display: flex;
  max-height: 100vh !important;
  background-color: var(--deep-white);
`;

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${({ show }) => (show ? "3.5rem" : "12.7rem")};
  width: stretch;
  height: 100%;
  background-color: var(--deep-white);
  display: flex;
  flex-direction: column;
  transition: all 0.6s ease;
`;

const Toggler = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--white);
  border: 1px solid var(--gray-black);
  position: absolute;
  top: 20%;
  left: ${({ show }) => (show ? "-0.5rem" : "-1rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  &:hover {
    cursor: pointer;
    transform: ${({ show }) => (show ? "translateX(5px)" : "translateX(-7px)")};
  }
  p {
    font-weight: 700;
  }
`;

export const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);

  const toggleShowSideBar = () => {
    setShow(!show);
  };

  return (
    <LayoutBody>
      <DashboardSideBar show={show} />
      <MainContainer show={show}>
        <Toggler show={show} onClick={toggleShowSideBar}>
          {show ? <p>&gt;</p> : <p>&lt;</p>}
        </Toggler>
        <DashboardNavabar />
        {children}
      </MainContainer>
    </LayoutBody>
  );
};
