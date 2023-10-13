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
  roundNumber: number;
}

const initialState: IGameState = {
  cards: [],
  firstInRoundOpenCard: null,
  isCardsClickable: true,
  isWin: false,
  roundNumber: 0,
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
    setCardStatus: (
      { cards },
      {
        payload: { id, status },
      }: PayloadAction<Pick<ICardData, 'id' | 'status'>>
    ) => {
      const currentCard = getCardById(cards, id);
      currentCard.status = status;
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
    incrementRoundNumber: (state) => {
      state.roundNumber += 1;
    },
    resetRoundNumberCtr: (state) => {
      state.roundNumber = 0;
    },
  },
});

export const {
  setPokemonCards,
  setCardStatus,
  setFirstInRoundOpenCard,
  resetFirstInRoundOpenCard,
  toggleIsCardsClickable,
  toggleWin,
  incrementRoundNumber,
  resetRoundNumberCtr,
} = gameSlice.actions;
export default gameSlice.reducer;
