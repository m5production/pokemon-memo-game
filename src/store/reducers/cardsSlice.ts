import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';
import { getShuffledCardsDataSet } from './helpers/cardsSetProcessors/getShuffledCardsDataSet';
import { getCardById } from './helpers/getCurrentCard';
import { getPokemonsImgs } from './helpers/cardsSetProcessors/getPokemonsImgs';

export interface ICardsState {
  cards: ICardData[];
  isCardsClickable: boolean;
}

const initialState: ICardsState = {
  cards: [],
  isCardsClickable: true,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPokemonCards: (
      state,
      { payload }: PayloadAction<number | undefined>
    ) => {
      const pokemonImgsSet = getPokemonsImgs(payload);
      state.cards = getShuffledCardsDataSet(pokemonImgsSet);
    },
    setCardStatus: (
      { cards },
      {
        payload: { id, status },
      }: PayloadAction<Pick<ICardData, 'id' | 'status'>>
    ) => {
      const currentCard = getCardById(cards, id);
      currentCard.status = status;
    },
    toggleIsCardsClickable: (state) => {
      state.isCardsClickable = !state.isCardsClickable;
    },
  },
});

export const { setPokemonCards, setCardStatus, toggleIsCardsClickable } =
  cardsSlice.actions;
export default cardsSlice.reducer;
