import React from 'react'
import styled from 'styled-components';
import { devices } from '../../utils/MediaQueiyBreakPoints';
import { AuthorDetails } from '../AuthorDetails/authorDetails';


export const BlogCards = ({
    image,
    category,
    title,
    description,
    avater,
    author,
    time
}) => {
    return (
        <BlogCardContainer>
            {image && <img src={image} alt={"Blog media"} />}
            <h6>{category.toLocaleUpperCase()}</h6>
            <h4>{title}</h4>
            <p>{description}</p>
            {avater && author && time && (
                <>
                    <hr />
                    <AuthorDetails
                        avatar={avater}
                        author={author}
                        time={time}
                    />
                </>
            )}
            
        </BlogCardContainer>
    )
}

const BlogCardContainer = styled.div`
    width:24rem;
    
    img{
        object-fit:cover;
        width:inherit;
    }
    h6{
        font-weight:400;
        margin: 1rem 0;
    }
    h4,p{
        margin-bottom:1rem;
    }
    hr{
        opacity:0.2 ;
    }

    @media ${devices.tablet}{
        /* width:20rem; */
        width:100%;
        h4{
            font-size:1rem;
        }
        p{
            font-size:1rem;
        }
        >img{
            width: 100% !important;
        }
    }


`

