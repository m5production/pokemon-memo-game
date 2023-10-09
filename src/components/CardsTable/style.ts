import styled from 'styled-components';

export const StyledCardsTable = styled.div<{ $numberOfColumns: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${({ $numberOfColumns }) => $numberOfColumns},
    1fr
  );
`;
