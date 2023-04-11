import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`
    width: auto;
    padding:1.25rem;
    background-color: var(--white);
    h5{
        margin: 1rem 0
    }
    >p{
        font-size: 0.8rem;
        margin-bottom:1.5rem;
    }


`
const IconBackground = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color:rgba(88, 101, 242, 0.13);
`
const Cardbutton = styled.div`
    width:100%;
    padding:16px 0;
    background-color: var(--primary);
    border-radius: 6.25rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    >div{
        p{
            color: var(--white);
        }
    }
`


export const CommunityCards = ({icon,iconOutline,platform,details}) => {
  return (
      <CardContainer>
          <IconBackground>
              {icon}
          </IconBackground>
          <h5>Join our {platform} channel</h5>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquet elit mattis facilisis mauris. Dictum cursus nisi donec nunc volutpat lectus ut in eu.
              Risus adipiscing quis cras sed. Lorem ipsum dolor sit amet consectetur. Aliquet elit mattis facilisis mauris.
              Dictum cursus nisi donec nunc volutpat lectus ut in eu. Risus adipiscing quis cras sed.
          </p>
          <Cardbutton>
              
              <div>
                  <p>Join channel now </p>
              </div>
          </Cardbutton>
          
      </CardContainer>
  )
}
