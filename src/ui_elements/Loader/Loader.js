import React from 'react';
import { Puff } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderDiv = styled.div`
  background-color: var(--white);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const LoaderComponent = () => (
  <LoaderDiv>
    <Puff/>
  </LoaderDiv>
);