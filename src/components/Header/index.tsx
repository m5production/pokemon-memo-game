import { CardAmountControl } from '../CardAmountControl';
import { ContentWrapper } from '../ContentWrapper';
import { StyledHeader } from './style';

export function Header() {
  return (
    <StyledHeader>
      <ContentWrapper>
        <h1>Pokemon Memo Game</h1>
        <CardAmountControl />
      </ContentWrapper>
    </StyledHeader>
  );
}
