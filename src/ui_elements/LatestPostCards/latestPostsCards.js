
import React from 'react'
import styled from 'styled-components'
import { AuthorDetails } from '../AuthorDetails/authorDetails'
import { devices } from '../../utils/MediaQueiyBreakPoints';

export const LatestPostsCards = ({ image, category, avatar, author, time, title, description,date }) => {
    return (
        <CardContainer>
            <img
                src={image}
                alt={"imageElement"}
            />
            <CardContainerDetails>
                <Category>
                    <p>{category}</p>
                    <p>{time}</p>
                </Category>
                <ContentPreview>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </ContentPreview>
                <AuthorDetailsHolder>
                    <AuthorDetails
                        avatar={avatar}
                        author={author}
                        time={date}
                    />
                </AuthorDetailsHolder>

                <ReadMore>
                    <p>Read more</p>
                    <p>&gt;</p>
                </ReadMore>
            </CardContainerDetails>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    display: flex;
    margin-bottom: 2.6rem;
    gap:5%;
    >img{
        width: 13rem;
        height: 15.6rem;
        object-fit: fill;
    }
    @media ${devices.tablet}{
        flex-wrap: wrap;
        >img{
            width: 100%;
        }
    }
`
const CardContainerDetails = styled.div`
    max-width: 400px;
    
`
const Category = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    p:first-child{
        background-color: var(--categoryGray);
        padding: 5px 10px;
        font-size: 0.7rem;
        font-weight: 600;
    }
    p:last-child{
        font-size: 0.8rem;
        font-weight: 700;
    }
`
const ContentPreview = styled.div`
    margin-top: 1.2rem;

`
const AuthorDetailsHolder = styled.div`
    margin-top: -0.6rem;
`
const ReadMore = styled.div`
    display: flex;
    align-items: center;
    gap:2%;
    p:last-child{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p:first-child{
        transition: all .3s ease;
    }
    :hover{
        cursor: pointer;
        p:first-child{
            font-weight: 600;
        }
    }

`