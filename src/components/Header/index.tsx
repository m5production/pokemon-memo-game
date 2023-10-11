import { CardAmountControl } from '../CardAmountControl';
import { ContentWrapper } from '../ContentWrapper';
import { StyledHeader, StyledHeaderContentWrapper } from './style';

export function Header() {
  return (
    <StyledHeader>
      <ContentWrapper>
        <StyledHeaderContentWrapper>
          <h1>Pokemon Memo Game</h1>
          <CardAmountControl />
        </StyledHeaderContentWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
}
