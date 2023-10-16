import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICardData } from '../type';
import { IGameState } from '../../../store/reducers/gameSlice';
import { startRound } from './startRound';
import { stopRound } from './stopRound';
import {
  setCardStatus,
  toggleIsCardsClickable,
} from '../../../store/reducers/cardsSlice';
import { RootState } from '../../../store/store';

export const handleCardOpen = createAsyncThunk(
  'game/handleCardOpen',
  async (actionData: ICardData, { dispatch, getState }) => {
    const { cards: cardsState, game } = getState() as RootState;
    const { cards } = cardsState;
    const { isCardsClickable, firstInRoundOpenCard } = game;
    if (!isCardsClickable) return;
    const { id } = actionData;
    dispatch(toggleIsCardsClickable());
    dispatch(setCardStatus({ id, status: 'opened' }));
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
