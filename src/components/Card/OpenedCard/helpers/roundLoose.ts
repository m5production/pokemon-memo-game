import { ROUND_CARDS_OPEN_TIME_IN_MILLIS } from '../../../../constants';
import { resetRoundCardsAnimationCtr, toggleIsAnimationOnRoundLoose } from '../../../../store/reducers/roundSlice';
import { AppDispatch } from '../../../../store/store';
import { setDelay } from './setDelay';

export function roundLoose() {
  return async function (dispatch: AppDispatch) {
    await setDelay(ROUND_CARDS_OPEN_TIME_IN_MILLIS);
    dispatch(resetRoundCardsAnimationCtr());
    dispatch(toggleIsAnimationOnRoundLoose());
  };
}
