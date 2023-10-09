import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';
import { getShuffledCardsDataSet } from '../../data/getShuffledCardsDataSet';
import { pokemonImgs } from '../../data/pokemonImgs';

export interface ICardsState {
  cards: ICardData[];
}

const initialState: ICardsState = {
  cards: getShuffledCardsDataSet(pokemonImgs),
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleOpen: (
      state,
      { payload: { id: currentId } }: PayloadAction<ICardData>
    ) => {
      const currentCard = state.cards.find(({ id }) => id === currentId);
      if (!currentCard) throw new Error('Card with provided ID was not found');
      currentCard.isOpen = !currentCard.isOpen;
    },
  },
});

export const {toggleOpen} = cardsSlice.actions;
export default cardsSlice.reducer;