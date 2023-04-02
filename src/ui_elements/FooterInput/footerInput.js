import React from 'react'
import styled from 'styled-components'
import { devices } from '../../utils/MediaQueiyBreakPoints';

export const FooterInput = ({placeholder}) => {
  return (
      <Input
          placeholder={placeholder}
     />
  )
}

const Input = styled.input`
    width: 376px;
    padding: 1rem;
    outline: none;
    border: none;
    :focus{
        border: 1px solid var(--primary);
    }
    @media ${devices.tablet}{
        width: 250px;
        padding: 0.7rem;
    }

`