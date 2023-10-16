import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';

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
    setFirstInRoundOpenCard: (state, { payload }: PayloadAction<ICardData>) => {
      state.firstInRoundOpenCard = payload;
    },
    resetFirstInRoundOpenCard: (state) => {
      state.firstInRoundOpenCard = null;
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

const { actions, reducer } = gameSlice;
export const {
  setFirstInRoundOpenCard,
  resetFirstInRoundOpenCard,
  toggleWin,
  incrementRoundNumber,
  resetRoundNumberCtr,
} = actions;
export default reducer;
