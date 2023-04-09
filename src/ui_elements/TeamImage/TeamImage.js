
import React from 'react'
import styled from 'styled-components'
import { LinkedIn, Twitter } from '../../assets/svgs'
import { Link } from 'react-router-dom'


const Container = styled.div`
    position: relative;
    width: 15rem;
    height: 32.6rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    img{
        height: inherit;
        width: inherit;
        object-fit: cover;
    }
    :hover{
        >div{
            height: 100%;
        }
    }
`
const Overlay = styled.div`
    width: 100%;
    height: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 1s ease;
    transform-origin: bottom;
    position: absolute;
    bottom: 0;
    gap: 4px;
    background-color: ${({ overlayColor }) => overlayColor};
   
`
const SocialsContainer = styled.div`
    display: flex;
    justify-self: flex-end !important;
    justify-content: flex-end;
`
const TwitterLink = styled.div.attrs({ as: Link })
    `
        margin-right: 10px;
    `
const LinkedInLink = styled(TwitterLink).attrs({ as: Link })`
`
const Name = styled.p`
    color: var(--pure-white);
    font-weight: 700;
    font-size: 1.25rem;
`
const Position = styled.p`
    color: var(--pure-white);
    font-weight: 400;
    font-size: 0.8rem;
`


export const TeamImage = ({
    image,
    name,
    position,
    twitter,
    linkedIn,
    overlayColor,
    backgroundColor
}) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <img
                src={image}
                alt='team member'
            />
            <Overlay
                overlayColor={overlayColor}
            >
                <Name>{name}</Name>
                <Position>{position}</Position>
                <SocialsContainer>
                    <div>
                        <TwitterLink to={twitter}>
                            <Twitter/>
                        </TwitterLink>
                        <LinkedInLink to={linkedIn}>
                            <LinkedIn/>
                        </LinkedInLink>
                    </div>
                </SocialsContainer>
            </Overlay>
        </Container>
    )
}
