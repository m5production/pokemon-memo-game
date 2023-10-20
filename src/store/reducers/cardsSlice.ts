import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';
import { getShuffledCardsDataSet } from './helpers/cardsSetProcessors/getShuffledCardsDataSet';
import { getCardById } from './helpers/getCurrentCard';

export interface ICardsState {
  cards: ICardData[];
  isCardsClickable: boolean;
  userSetNumberOfPokemons: number;
}

const initialState: ICardsState = {
  cards: [],
  isCardsClickable: true,
  userSetNumberOfPokemons: 2,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPokemonCards: (state, { payload }: PayloadAction<string[]>) => {
      state.cards = getShuffledCardsDataSet(payload);
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
    setIsCardsClickable: (state, { payload }: PayloadAction<boolean>) => {
      state.isCardsClickable = payload;
    },
    setUserSetNumberOfPokemons: (state, {payload}: PayloadAction<number>) => {
      state.userSetNumberOfPokemons = payload;
    }
  },
});

export const { setPokemonCards, setCardStatus, setIsCardsClickable, setUserSetNumberOfPokemons } =
  cardsSlice.actions;
export default cardsSlice.reducer;
