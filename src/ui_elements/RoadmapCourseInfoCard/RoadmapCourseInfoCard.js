import styled from "styled-components";
import { YellowAward } from "../../assets/svgs";
import { Button } from "../Button/Button";
import Left from "../../assets/images/courseCardAccent.png";
import Right from "../../assets/images/courseCardAccent2.png";
import { useNavigate } from "react-router-dom";
import { devices } from "../../utils/MediaQueiyBreakPoints";

export const RoadMapCourseInfoCard = ({
  level,
  courseNo,
  cardTitle,
  item,
  description,
}) => {
  const roadMapNavigate = useNavigate();
  return (
    <CardContainer>
      <img src={Left} alt="Accent" />
      <CardHeader>
        <CardHeaderInfo>
          <AwardBackground>
            <YellowAward />
          </AwardBackground>
          <div>
            <h6>{cardTitle}</h6>
            <p>{courseNo} syllabus</p>
          </div>
        </CardHeaderInfo>

        <Button
          onClick={() => {
            roadMapNavigate(`/roadmap/${level}`);
          }}
        >
          View Roadmap
        </Button>
      </CardHeader>
      <CardDetails>
        <p>{description}</p>
      </CardDetails>
      <img src={Right} alt="Accent" />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: auto;
  height: 10rem;
  padding: 1.2rem 2.3rem;
  position: relative;
  margin-top: 1rem;
  box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.08);
  img:first-child {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  img:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media ${devices.tablet} {
    padding: 0.5rem;
  }
`;
const CardHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h6 {
    font-size: 1rem;
    font-weight: 600;
  }
  @media ${devices.tablet} {
    h6,
    p {
      font-size: 0.7rem;
    }
  }
`;
const AwardBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 207, 78, 0.12);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  @media ${devices.tablet} {
    width: 25px;
    height: 25px;
  }
`;
const CardHeaderInfo = styled.div`
  display: flex;
  gap: 12px;
  @media ${devices.tablet} {
    align-items: center;
    gap: 6px;
  }
`;
const CardDetails = styled.section`
  margin-top: 1rem;
  p {
    font-size: 0.75rem;
    line-height: 1.3;
  }
  @media ${devices.tablet} {
    p {
      font-size: 0.65rem;
    }
  }
`;
