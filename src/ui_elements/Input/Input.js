import React from 'react'
import styled from 'styled-components'
import { devices } from '../../utils/MediaQueiyBreakPoints'

export const Input = ({
    placeholder,
    errorMessage,
    width,
    height,
    type
    
}) => {
    return (
        <>
            <InputField
                placeholder={placeholder}
                width={width}
                height={height}
                type={type}
            />
            <p>{errorMessage}</p>
        </>

    )
}

const InputField = styled.input`
    padding: 1.1rem;
    border: 1px solid #D0D5DD;
    width: ${({ width }) => width ? width : "fill"};
    height: ${({ height }) => height && height};
    outline: none;
    border-radius: 4px;
    :focus{
        border-color: var(--primary);
    }

    @media ${devices.tablet}{
        padding: 0.8rem;
        width: 100%;
    }
`
