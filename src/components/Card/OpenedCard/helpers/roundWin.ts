import { ROUND_CARDS_OPEN_TIME_IN_MILLIS } from '../../../../constants';
import { toggleIsCardsClickable } from '../../../../store/reducers/cardsSlice';
import { toggleWin } from '../../../../store/reducers/gameSlice';
import { isAllCardsOpen } from '../../../../store/reducers/helpers/isAllCardsOpen';
import { AppDispatch, RootState } from '../../../../store/store';
import { removeRoundCards } from './removeRoundCards';
import { setDelay } from './setDelay';

export function roundWin({
  firstId,
  secondId,
}: {
  firstId: string;
  secondId: string;
}) {
  return async function (dispatch: AppDispatch, getState: () => RootState) {
    const {
      cards: { cards },
    } = getState();
    if (isAllCardsOpen(cards)) {
      dispatch(toggleWin());
      dispatch(toggleIsCardsClickable());
      return;
    }
    await setDelay(ROUND_CARDS_OPEN_TIME_IN_MILLIS);
    dispatch(removeRoundCards({ firstId, secondId }));
    dispatch(toggleIsCardsClickable());
  };
}
