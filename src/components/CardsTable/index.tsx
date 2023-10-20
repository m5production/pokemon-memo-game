import { StyledCardsTable } from './style';
import { Card } from '../Card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchAndSetImgs } from '../../store/reducers/pokemonImagesSlice';

export function CardsTable() {
  const dispatch = useAppDispatch();
  const { totalCount } = useAppSelector((state) => state.fetchedPokemonImages);
  const { userSetNumberOfPokemons } = useAppSelector((state) => state.cards);
  useEffect(() => {
    dispatch(
      fetchAndSetImgs({
        maxNumber: totalCount,
        numberOfImgs: userSetNumberOfPokemons,
      })
    );
  }, [userSetNumberOfPokemons]);
  const { cards: cardsData } = useAppSelector((state) => state.cards);
  return (
    <StyledCardsTable $numberOfColumns={2}>
      {cardsData.map((cardData) => (
        <Card key={`${cardData.id}`} {...cardData} />
      ))}
    </StyledCardsTable>
  );
}
