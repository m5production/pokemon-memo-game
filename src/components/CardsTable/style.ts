import styled from 'styled-components';

export const StyledCardsTable = styled.div<{ $numberOfColumns: number }>`
  max-width: 1000px;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media(max-width: 450px) {
    gap: 0.8rem;
  }
`;
