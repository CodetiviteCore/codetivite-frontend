import styled from "styled-components";
import React from "react";
import { CloseCircle, CompleteCircle, TickCircle } from "../../assets/svgs";
import { devices } from "../../utils/MediaQueiyBreakPoints";

export const LockUnlocked = ({ locked = true, complete }) => {
  return (
    <>
      {complete ? (
        <TickCircle />
      ) : (
        <Container locked={locked}>
          {locked ? <CloseCircle /> : <CompleteCircle />}
          {locked ? <Locked>Locked</Locked> : <Unlocked>Unlocked</Unlocked>}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  background-color: ${({ locked }) =>
    locked ? "var(--locked)" : "var(--unlocked)"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 1.2rem;
  padding: 0.2rem 0.5rem;
  margin-right: 0.4rem;
  p {
    font-size: 0.8rem;
    font-weight: 600;
  }
  @media ${devices.tablet} {
    p {
      font-size: 0.6rem;
    }
  }
`;
const Locked = styled.p`
  color: var(--danger) !important;
`;
const Unlocked = styled.p`
  color: var(--primary);
`;
