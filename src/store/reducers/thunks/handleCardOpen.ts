import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICardData } from '../../../components/Card/type';
import {
  IGameState,
  resetFirstInRoundOpenCard,
  setFirstInRoundOpenCard,
  toggleCardOpen,
  toggleIsCardsClickable,
  toggleWin,
} from '../gameSlice';
import { isAllCardsOpen } from '../helpers/isAllCardsOpen';
import { setDelayBeforeFlipBack } from '../helpers/setDelayBeforeFlipBack';

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
