import { CardsTable } from '../CardsTable';
import { ContentWrapper } from '../ContentWrapper';
import { StyledMain } from './style';
import { useAppSelector } from '../../store/hooks';

export function Main() {
  const cards = useAppSelector((state) => state.cards);
  return (
    <StyledMain>
      <ContentWrapper>
        <CardsTable cardsData={cards} />
      </ContentWrapper>
    </StyledMain>
  );
}
