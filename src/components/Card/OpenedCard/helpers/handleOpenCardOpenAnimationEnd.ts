import { incrementRoundCardsAnimationCtr, resetRoundCardsAnimationCtr } from '../../../../store/reducers/roundSlice';
import { AppDispatch, RootState } from '../../../../store/store';
import { roundLoose } from './roundLoose';
import { roundWin } from './roundWin';

export function handleOpenCardOpenAnimationEnd() {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(incrementRoundCardsAnimationCtr());

    const {
      round: { roundCardsAnimationCtr, roundCards },
    } = getState();

    if (roundCardsAnimationCtr < 2) return;

    const [firstCard, secondCard] = roundCards;

    if (firstCard.src === secondCard.src) {
      dispatch(roundWin());
    } else {
      dispatch(roundLoose());
    }

    dispatch(resetRoundCardsAnimationCtr());
  };
}
