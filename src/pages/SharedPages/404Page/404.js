import React from 'react'
import styled from 'styled-components'
import { DisconnectedIcon} from '../../../assets/svgs'




export const Disconnected = () => {
  return (
    <Container>
      <div>
        <Icon />
        <p>You are offline please connect to the internet</p>
      </div>
    </Container>
  )
}



const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh !important;
  width:100vw !important;
  text-align: center;
  position:relative;
  p{
    font-size: clamp(1rem, 2vw, 1.5rem);
  }
`
const Icon = styled(DisconnectedIcon)`
  width:clamp(10%, 20%, 25% );
  height:clamp(10%, 20%, 25% );
  fill:var(--primary)
`

export default Disconnected
