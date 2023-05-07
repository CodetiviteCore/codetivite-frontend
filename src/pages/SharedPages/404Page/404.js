import styled, { keyframes } from 'styled-components';

export const ErrorPage = () => {
  return (
    <Container>
      <FlexContainer>
        <TextCenter>
          <Heading>
            <FadeIn id="digit1">4</FadeIn>
            <FadeIn id="digit2">0</FadeIn>
            <FadeIn id="digit3">4</FadeIn>
          </Heading>
          <SubHeading>PAGE NOT FOUND</SubHeading>
          <Button type="button" name="button">Return To Home</Button>
        </TextCenter>
      </FlexContainer>
    </Container>
  );
};

const colorSlide = keyframes`
  0% {
    background-color: #152a68;
  }

  25% {
    background-color: royalblue;
  }

  50% {
    background-color: seagreen;
  }

  75% {
    background-color: tomato;
  }

  100% {
    background-color: #152a68;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  animation: ${colorSlide} 15s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  margin: 10px;
  cursor: default;
  font-size: 8em;
  transition: font-size 200ms ease-in-out;
  border-bottom: 1px dashed white;

  span {
    animation-delay: ${props => props.delay || '0ms'};
  }
`;

const FadeIn = styled.span`
  animation: ${fadeIn} 2s ease infinite;
`;

const SubHeading = styled.h3`
  margin: 10px;
  cursor: default;
`;

const Button = styled.button`
  border: 1px solid white;
  background: transparent;
  outline: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  transition: background-color 200ms ease-in;
  margin: 20px 0;

  &:hover {
    background-color: white;
    color: #555;
    cursor: pointer;
  }
`;

