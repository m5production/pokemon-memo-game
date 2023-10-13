import { PokemonAmountControl } from '../CardAmountControl';
import { ContentWrapper } from '../ContentWrapper';
import { RoundCounter } from '../RoundCounter';
import { StyledHeader, StyledHeaderContentWrapper } from './style';

export function Header() {
  return (
    <StyledHeader>
      <ContentWrapper>
        <StyledHeaderContentWrapper>
          <h1>Pokemon Memo Game</h1>
          <RoundCounter />
          <PokemonAmountControl />
        </StyledHeaderContentWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
}
