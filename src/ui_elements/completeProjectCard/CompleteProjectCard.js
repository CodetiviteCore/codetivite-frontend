import styled from 'styled-components';
import { Lock, Teacher } from '../../assets/svgs';

const CardContainer = styled.div`
    border-bottom: 1px solid var(--navborders);
    padding-bottom: 10px;
    margin-top: 1.2rem;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        gap: 10px;
        h5{
            font-size: 1rem;
            font-weight: 600;
        }
    }
    
`

const Details = styled.p`
    margin:20px 0;
    font-size: 0.75rem;
    line-height: 1.3;
    width: 86%;
    margin: 0 auto;

`

export const CompleteProjectCard = () => {
    return (
        <CardContainer>
            <Header>
                <div>
                    <Teacher />
                    <h5>Design an Ecommerce website</h5>
                </div>
                <Lock />
            </Header>
            <Details>
                Lorem ipsum dolor sit amet consectetur.
                Et dolor orci auctor dignissim. Aliquam varius commodo ac sed ac.
                Dictumst lorem donec curabitur amet eget.
                Quam proin consectetur ac pharetra id ut imperdiet.
            </Details>
        </CardContainer>
    )
}