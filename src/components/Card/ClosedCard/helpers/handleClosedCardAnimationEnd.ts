import { setCardStatus, toggleIsCardsClickable } from '../../../../store/reducers/cardsSlice';
import {
  incrementRoundCardsAnimationCtr,
  resetRound,
} from '../../../../store/reducers/roundSlice';
import { AppDispatch, RootState } from '../../../../store/store';
import { ICardData } from '../../type';

export function handleClosedCardAnimationEnd({ id }: ICardData) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    const {
      round: { isAnimationOnRoundLoose },
    } = getState();
    if (isAnimationOnRoundLoose) {
      dispatch(incrementRoundCardsAnimationCtr());
      const {
        round: { roundCardsAnimationCtr: newRoundCardsAnimationCtr },
      } = getState();
      if (newRoundCardsAnimationCtr < 2) return;
      dispatch(resetRound());
      dispatch(toggleIsCardsClickable());
      return;
    }
    dispatch(setCardStatus({ id, status: 'opened' }));
  };
}
