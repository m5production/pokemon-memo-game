import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  incrementRoundNumber,
  setFirstInRoundOpenCard,
} from '../../../store/reducers/gameSlice';
import { ICardData } from '../type';

export function startRound(actionData: ICardData, dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
  dispatch(setFirstInRoundOpenCard(actionData));
  dispatch(incrementRoundNumber());
}
