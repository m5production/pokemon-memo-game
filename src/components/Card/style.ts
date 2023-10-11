import styled from 'styled-components';

export const StyledCardBasic = styled.div`
  flex-shrink: 0;
  width: clamp(100px, 30%, 250px);
  aspect-ratio: 1;

  border: 2px solid purple;
  border-radius: 10px;

  background-color: #c1c1c1;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
