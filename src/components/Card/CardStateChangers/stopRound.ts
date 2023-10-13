import {
  resetFirstInRoundOpenCard,
  setCardStatus,
  toggleWin,
} from '../../../store/reducers/gameSlice';
import { checkIsLastCardOpen } from '../../../store/reducers/helpers/checkIsLastCardOpen';
import { setDelayBeforeFlipBack } from '../../../store/reducers/helpers/setDelayBeforeFlipBack';
import { RootState } from '../../../store/store';
import { ICardData } from '../type';
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
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
}) {
  if (firstCard.src === secondCard.src) {
    const isLastCardOpen = checkIsLastCardOpen(cards);
    if (isLastCardOpen) {
      dispatch(toggleWin());
      dispatch(resetFirstInRoundOpenCard());
      return;
    }
    dispatch(resetFirstInRoundOpenCard());
    await setDelayBeforeFlipBack(1);
    dispatch(setCardStatus({ id: firstCard.id, status: 'invisible' }));
    dispatch(setCardStatus({ id: secondCard.id, status: 'invisible' }));
  } else {
    await setDelayBeforeFlipBack(1);
    dispatch(setCardStatus({ id: firstCard.id, status: 'closed' }));
    dispatch(setCardStatus({ id: secondCard.id, status: 'closed' }));
    dispatch(resetFirstInRoundOpenCard());
  }
}
