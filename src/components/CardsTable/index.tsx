import { StyledCardsTable } from './style';
import { Card } from '../Card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchAndSetImgs } from '../../store/reducers/pokemonImagesSlice';
import { resetRound } from '../../store/reducers/roundSlice';
import { resetGame } from '../../store/reducers/sharedThunks/resetGame';
import { setIsCardsClickable } from '../../store/reducers/cardsSlice';

export function CardsTable() {
  const dispatch = useAppDispatch();
  // const { totalCount } = useAppSelector((state) => state.fetchedPokemonImages);  
  const { userSetNumberOfPokemons } = useAppSelector((state) => state.cards);
  useEffect(() => {
    dispatch(resetRound());
    dispatch(resetGame(userSetNumberOfPokemons));
    dispatch(setIsCardsClickable(true));
    // dispatch(
    //   fetchAndSetImgs({
    //     maxNumber: totalCount,
    //     numberOfImgs: userSetNumberOfPokemons,
    //   })
    // );
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