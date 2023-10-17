import { ROUND_CARDS_OPEN_TIME_IN_MILLIS } from '../../../../constants';
import { setIsCardsClickable } from '../../../../store/reducers/cardsSlice';
import { toggleWin } from '../../../../store/reducers/gameSlice';
import { isAllCardsOpen } from '../../../../store/reducers/helpers/isAllCardsOpen';
import { resetRound } from '../../../../store/reducers/roundSlice';
import { AppDispatch, RootState } from '../../../../store/store';
import { hideCardsPlayedInRound } from './hideCardsPlayedInRound';
import { setDelay } from './setDelay';

export function roundWin() {
  return async function (dispatch: AppDispatch, getState: () => RootState) {
    const {
      cards: { cards },
      round: { roundCards },
    } = getState();
    if (isAllCardsOpen(cards)) {
      dispatch(toggleWin());
      return;
    }
    const [{ id: firstId }, { id: secondId }] = roundCards;
    dispatch(setIsCardsClickable(true));
    dispatch(resetRound());
    await setDelay(ROUND_CARDS_OPEN_TIME_IN_MILLIS);
    dispatch(hideCardsPlayedInRound({ firstId, secondId }));
  };
}
