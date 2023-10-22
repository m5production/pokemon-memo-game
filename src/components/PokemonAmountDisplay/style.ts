import styled from 'styled-components';

export const StyledAmountDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  align-items: center;
`

export const StyledPokemonAmountDisplay = styled.div`
  padding: 0.3rem;

  background-color: white;
  text-align: center;

  border: 2px solid purple;
  border-radius: 0.5rem;

  font-size: 2rem;
  font-weight: bold;
`;

export const StyledIncreaseBtn = styled.button`
  width: 0;

  padding: 0;
  
  background: transparent;
  
  border: 1rem solid transparent;
  border-top: none;
  border-bottom-color: purple;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    border-bottom-color: grey;
  }
`;

export const StyledDecreaseBtn = styled(StyledIncreaseBtn)`
  border-bottom: none;
  border-top: 1rem solid purple;

  &:disabled {
    border-top-color: grey;
  }
`;
