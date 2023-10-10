import { CardsTable } from '../CardsTable';
import { ContentWrapper } from '../ContentWrapper';
import { StyledMain } from './style';

export function Main() {
  return (
    <StyledMain>
      <ContentWrapper>
        <CardsTable />
      </ContentWrapper>
    </StyledMain>
  );
}
