import {
  setCardStatus,
  setIsCardsClickable,
} from '../../../../store/reducers/cardsSlice';
import {
  incrementRoundCardsAnimationCtr,
  resetRound,
} from '../../../../store/reducers/roundSlice';
import { AppDispatch, RootState } from '../../../../store/store';

export function handleClosedCardCloseAnimationEnd() {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(incrementRoundCardsAnimationCtr());
    const {
      round: { roundCardsAnimationCtr },
    } = getState();
    if (roundCardsAnimationCtr < 2) return;
    dispatch(resetRound());
    dispatch(setIsCardsClickable(true));
  };
}
