import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';

export interface IRoundState {
  roundCards: ICardData[];
  roundCardsAnimationCtr: number;
  isAnimationOnRoundLoose: boolean;
}

const initialState: IRoundState = {
  roundCards: [],
  roundCardsAnimationCtr: 0,
  isAnimationOnRoundLoose: false,
};

export const gameSlice = createSlice({
  name: 'round',
  initialState,
  reducers: {
    addRoundCard: (state, { payload }: PayloadAction<ICardData>) => {
      state.roundCards = [...state.roundCards, payload];
    },
    resetRoundCards: (state) => {
      state.roundCards = [];
    },
    incrementRoundCardsAnimationCtr: (state) => {
      state.roundCardsAnimationCtr += 1;
    },
    resetRoundCardsAnimationCtr: (state) => {
      state.roundCardsAnimationCtr = 0;
    },
    toggleIsAnimationOnRoundLoose: (state) => {
      state.isAnimationOnRoundLoose = !state.isAnimationOnRoundLoose;
    },
    resetRound: (state) => {
      state.isAnimationOnRoundLoose = false;
      state.roundCards = [];
      state.roundCardsAnimationCtr = 0;
    },
  },
});

const { actions, reducer } = gameSlice;
export const {
  addRoundCard,
  resetRoundCards,
  incrementRoundCardsAnimationCtr,
  resetRoundCardsAnimationCtr,
  toggleIsAnimationOnRoundLoose,
  resetRound,
} = actions;
export default reducer;
