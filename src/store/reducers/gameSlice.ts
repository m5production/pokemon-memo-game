import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../components/Card/type';
import { getShuffledCardsDataSet } from '../../data/getShuffledCardsDataSet';
import { pokemonImgs } from '../../data/pokemonImgs';
import { getCardById } from './helpers/getCurrentCard';
import { setDelayBeforeFlipBack } from './helpers/setDelayBeforeFlipBack';
import { isAllCardsOpen } from './helpers/isAllCardsOpen';

export interface IGameState {
  cards: ICardData[];
  firstInRoundOpenCard: ICardData | null;
  isCardsClickable: boolean;
  isWin: boolean;
}

const initialState: IGameState = {
  cards: getShuffledCardsDataSet(pokemonImgs),
  firstInRoundOpenCard: null,
  isCardsClickable: true,
  isWin: false,
};

export const handleCardOpen = createAsyncThunk(
  'game/handleCardOpen',
  async (actionData: ICardData, { dispatch, getState }) => {
    const state = getState() as IGameState;
    const { cards, isCardsClickable, firstInRoundOpenCard } = state;
    if (!isCardsClickable) return;
    const { id, src } = actionData;
    dispatch(toggleIsCardsClickable());
    dispatch(toggleCardOpen({ id }));
    if (firstInRoundOpenCard === null) {
      dispatch(setFirstInRoundOpenCard(actionData));
    } else {
      if (firstInRoundOpenCard.src === src) {
        dispatch(resetFirstInRoundOpenCard());
        const isAllOpen = isAllCardsOpen(cards);
        if (isAllOpen) dispatch(toggleWin());
      } else {
        await setDelayBeforeFlipBack(1);
        dispatch(toggleCardOpen(firstInRoundOpenCard));
        dispatch(toggleCardOpen(actionData));
        dispatch(resetFirstInRoundOpenCard());
      }
    }
    dispatch(toggleIsCardsClickable());
  }
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
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
      state.isWin = true;
    },
  },
});

export const {
  toggleCardOpen,
  setFirstInRoundOpenCard,
  resetFirstInRoundOpenCard,
  toggleIsCardsClickable,
  toggleWin,
} = gameSlice.actions;
export default gameSlice.reducer;
