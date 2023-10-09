import { CardsTable } from '../CardsTable';
import { ContentWrapper } from '../ContentWrapper';
import { StyledMain } from './style';
import { pokemonImgs } from '../../data/pokemonImgs';
import { getShuffledCardsDataSet } from '../../data/getShuffledCardsDataSet';

export function Main() {
  const cardsDataSet = getShuffledCardsDataSet(pokemonImgs);
  return (
    <StyledMain>
      <ContentWrapper>
        <CardsTable cardsData={cardsDataSet}/>
      </ContentWrapper>
    </StyledMain>
  );
}
