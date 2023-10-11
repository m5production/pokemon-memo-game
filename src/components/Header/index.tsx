import { CardAmountControl } from '../CardAmountControl';
import { ContentWrapper } from '../ContentWrapper';
import { RoundCounter } from '../RoundCtr';
import { StyledHeader, StyledHeaderContentWrapper } from './style';

export function Header() {
  return (
    <StyledHeader>
      <ContentWrapper>
        <StyledHeaderContentWrapper>
          <h1>Pokemon Memo Game</h1>
          <RoundCounter />
          <CardAmountControl />
        </StyledHeaderContentWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
}
