import styled, { keyframes } from 'styled-components';

const bouncing = keyframes`
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(200px);
  }
`

export const StyledBall = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: yellow;

  border: 2px solid purple;
  border-radius: 50%;

  animation-name: ${bouncing};
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`