import styled from 'styled-components';
import {Teacher } from '../../assets/svgs';
import { LockUnlocked } from '../LockUnlock/LockUnlocked';
import { truncateText } from '../../utils/constants';


export const CompleteProjectCard = ({project, completed}) => {
    return (
        <CardContainer>
            <Header>
                <div>
                    <Teacher />
                    <h5>{project?.title}</h5>
                </div>

                <LockUnlocked
                    complete={completed}
                />
            </Header>
            <Details>
                {
                    truncateText(project?.description)
                }
            </Details>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    border-bottom: 1px solid var(--navborders);
    padding-bottom: 10px;
    margin-top: 1.2rem;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    div{
        display: flex;
        align-items:center;
        gap: 10px;
        h5{
            font-size: 1rem;
            font-weight: 600;
        }
    }
    
`

const Details = styled.p`
    margin:0.5rem 0;
    font-size: 0.75rem;
    line-height: 1.3;
    width:inherit;
    padding-left:8%;
    

`