import styled from "styled-components";
import { YellowAward } from "../../assets/svgs";
import { Button } from "../Button/Button";
import Left from "../../assets/images/courseCardAccent.png"
import Right from "../../assets/images/courseCardAccent2.png"

const CardContainer = styled.div`
    width: auto;
    height: 10rem;
    padding: 1.2rem 2.3rem;
    position:relative;
    margin-top: 1rem;
    box-shadow: 0px 6px 8px -2px rgba(0,0,0,0.08);
-webkit-box-shadow: 0px 6px 8px -2px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 6px 8px -2px rgba(0,0,0,0.08);
    img:first-child{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    img:last-child{
        position: absolute;
        bottom: 0;
        right: 0;
    }
`
const CardHeader = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h6{
        font-size: 1rem;
        font-weight: 600;
    }
`
const AwardBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(245, 207, 78, 0.12);
    width: 55px;
    height: 55px;
    border-radius: 50%;
`
const CardHeaderInfo = styled.div`
    display: flex;
    gap: 12px;
`
const CardDetails = styled.section`
    margin-top: 1rem;
    p{
        font-size: 0.75rem;
        line-height: 1.3;
    }
`
export const RoadMapCourseInfoCard = ({level, courseNo}) => {
    return (
        <CardContainer>
            <img src={ Left} alt="Accent"/>
            <CardHeader>
                <CardHeaderInfo>
                    <AwardBackground>
                        <YellowAward />
                    </AwardBackground>
                    <div>
                        <h6>{level}</h6>
                        <p>{courseNo} syllabus</p>
                    </div>
                </CardHeaderInfo>

                <Button>View Roadmap</Button>
            </CardHeader>
            <CardDetails>
                <p>Lorem ipsum dolor sit amet consectetur.
                    Amet viverra purus enim urna hac semper. Integer at imperdiet tortor imperdiet vulputate pharetra nullam lorem elit.
                    Vitae consequat et id porta. Ut diam diam commodo suspendisse sed lorem.
                    Scelerisque proin.
                </p>
            </CardDetails>
            <img src={Right} alt="Accent"/>
        </CardContainer>
    )
}