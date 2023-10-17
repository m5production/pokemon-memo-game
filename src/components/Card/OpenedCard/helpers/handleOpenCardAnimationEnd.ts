import { setCardStatus } from '../../../../store/reducers/cardsSlice';
import { incrementRoundCardsAnimationCtr } from '../../../../store/reducers/roundSlice';
import { AppDispatch, RootState } from '../../../../store/store';
import { roundLoose } from './roundLoose';
import { roundWin } from './roundWin';

export function handleOpenCardAnimationEnd() {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(incrementRoundCardsAnimationCtr());

    const {
      round: { roundCardsAnimationCtr, roundCards, isAnimationOnRoundLoose },
    } = getState();

    if (roundCardsAnimationCtr < 2) return;

    const [firstCard, secondCard] = roundCards;

    if (isAnimationOnRoundLoose) {
      dispatch(setCardStatus({ id: firstCard.id, status: 'closed' }));
      dispatch(setCardStatus({ id: secondCard.id, status: 'closed' }));
      return;
    }

    if (firstCard.src === secondCard.src) {
      dispatch(roundWin({ firstId: firstCard.id, secondId: secondCard.id }));
    } else {
      dispatch(roundLoose());
    }
  };
}
