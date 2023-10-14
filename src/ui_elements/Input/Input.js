import React from 'react'
import styled from 'styled-components'
import { devices } from '../../utils/MediaQueiyBreakPoints'

export const Input = ({
    placeholder,
    width,
    id,
    height,
    type,
    label,
    error,
    register,
    autoFocus,
    backgroundColor,
    ...otherProps

}) => {
    return (
        <>
            <InputField
                placeholder={placeholder}
                width={width}
                height={height}
                type={type}
                backgroundColor={backgroundColor}
                autoFocus={autoFocus}
                {...(register && { ...register(id) })}
                {...otherProps}
            />
            {error && id ? (
                <ErrorContainer>
                    <p>{error[id]?.message}</p>
                </ErrorContainer>
            ) : null}
        </>

    )
}

const InputField = styled.input`
    padding: 1.1rem;
    border: ${({ border }) => border ? "1px solid var(--light-green)" : "none"};
    width: ${({ width }) => width ? `${width} !important` : "-webkit-fill-available"};
    height: ${({ height }) => height && height};
    outline: none;
    border-radius: 4px;
    :focus{
        border-color: var(--primary);
    }
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : "var(--white)"};

    @media ${devices.tablet}{
        padding: 0.8rem;
        width: 100%;
    }
`

const ErrorContainer = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  /* z-index: 2; */
  p {
    font-size: 0.7rem !important;
  }
`;
