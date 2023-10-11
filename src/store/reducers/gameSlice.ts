import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';
import { getShuffledCardsDataSet } from './helpers/cardsSetProcessors/getShuffledCardsDataSet';
import { getCardById } from './helpers/getCurrentCard';
import { getPokemonsImgs } from './helpers/cardsSetProcessors/getPokemonsImgs';

export interface IGameState {
  cards: ICardData[];
  firstInRoundOpenCard: ICardData | null;
  isCardsClickable: boolean;
  isWin: boolean;
}

const initialState: IGameState = {
  cards: [],
  firstInRoundOpenCard: null,
  isCardsClickable: true,
  isWin: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPokemonCards: (
      state,
      { payload }: PayloadAction<number | undefined>
    ) => {
      const pokemonImgsSet = getPokemonsImgs(payload);
      state.cards = getShuffledCardsDataSet(pokemonImgsSet);
    },
    toggleCardOpen: (
      { cards },
      { payload: { id } }: PayloadAction<Pick<ICardData, 'id'>>
    ) => {
      const currentCard = getCardById(cards, id);
      currentCard.isOpen = !currentCard.isOpen;
    },
    setFirstInRoundOpenCard: (state, { payload }: PayloadAction<ICardData>) => {
      state.firstInRoundOpenCard = payload;
    },
    resetFirstInRoundOpenCard: (state) => {
      state.firstInRoundOpenCard = null;
    },
    toggleIsCardsClickable: (state) => {
      state.isCardsClickable = !state.isCardsClickable;
    },
    toggleWin: (state) => {
      state.isWin = !state.isWin;
    },
  },
});

export const {
  setPokemonCards,
  toggleCardOpen,
  setFirstInRoundOpenCard,
  resetFirstInRoundOpenCard,
  toggleIsCardsClickable,
  toggleWin,
} = gameSlice.actions;
export default gameSlice.reducer;
