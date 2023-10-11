import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICardData } from '../type';
import {
  IGameState,
  toggleCardOpen,
  toggleIsCardsClickable,
} from '../../../store/reducers/gameSlice';
import { startRound } from './startRound';
import { stopRound } from './stopRound';

export const handleCardOpen = createAsyncThunk(
  'game/handleCardOpen',
  async (actionData: ICardData, { dispatch, getState }) => {
    const state = getState() as IGameState;
    const { cards, isCardsClickable, firstInRoundOpenCard } = state;
    if (!isCardsClickable) return;
    const { id } = actionData;
    dispatch(toggleIsCardsClickable());
    dispatch(toggleCardOpen({ id }));
    if (firstInRoundOpenCard === null) {
      startRound(actionData, dispatch);
    } else {
      await stopRound({
        cards,
        firstCard: firstInRoundOpenCard,
        secondCard: actionData,
        dispatch,
      });
    }
    dispatch(toggleIsCardsClickable());
  }
);
