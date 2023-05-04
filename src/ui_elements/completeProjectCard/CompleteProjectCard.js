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

export const CompleteProjectCard = ({project}) => {
    return (
        <CardContainer>
            <Header>
                <div>
                    <Teacher />
                    <h5>{project?.title}</h5>
                </div>
                <Lock />
            </Header>
            <Details>
                {
                    project?.description
                }
            </Details>
        </CardContainer>
    )
}