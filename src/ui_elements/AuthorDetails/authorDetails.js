
import React from 'react'
import styled from 'styled-components'

export const AuthorDetails = ({ avatar, author, time }) => {
    return (
        <Container>
            <img src={avatar} alt={"auther media"} />
            <div>
                <h5>{author}</h5>
                <p>{time}</p>
            </div>
        </Container>
    )
}
const Container = styled.div`
       display:flex;
        align-items:center;
        width:fit-content;
        margin-top:1rem;
        gap: 0.6rem;
        img{
            width: 30px;
            height: 30px;
            
        }
        div{
            margin-top:1rem;
        }
        h5{
            font-size:1rem;
        }
        p{
            font-size:0.8rem;
        }

`
