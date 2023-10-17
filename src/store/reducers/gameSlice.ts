import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';

export interface IGameState {
  cards: ICardData[];
  isCardsClickable: boolean;
  isWin: boolean;
  roundNumber: number;
}

const initialState: IGameState = {
  cards: [],
  isCardsClickable: true,
  isWin: false,
  roundNumber: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
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

const { actions, reducer } = gameSlice;
export const {
  toggleWin,
  incrementRoundNumber,
  resetRoundNumberCtr,
} = actions;
export default reducer;
