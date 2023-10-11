import {
  resetFirstInRoundOpenCard,
  toggleCardOpen,
  toggleWin,
} from '../../../store/reducers/gameSlice';
import { checkIsLastCardOpen } from '../../../store/reducers/helpers/checkIsLastCardOpen';
import { setDelayBeforeFlipBack } from '../../../store/reducers/helpers/setDelayBeforeFlipBack';
import { ICardData } from '../type';
import { useAppDispatch } from '../../../store/hooks';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export async function stopRound({
  firstCard,
  secondCard,
  cards,
  dispatch,
}: {
  firstCard: ICardData;
  secondCard: ICardData;
  cards: ICardData[];
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
}) {
  if (firstCard.src === secondCard.src) {
    dispatch(resetFirstInRoundOpenCard());
    const isLastCardOpen = checkIsLastCardOpen(cards);
    if (isLastCardOpen) dispatch(toggleWin());
  } else {
    await setDelayBeforeFlipBack(1);
    dispatch(toggleCardOpen(firstCard));
    dispatch(toggleCardOpen(secondCard));
    dispatch(resetFirstInRoundOpenCard());
  }
}
