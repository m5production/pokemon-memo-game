import { setIsCardsClickable } from '../../../../store/reducers/cardsSlice';
import { incrementRoundNumber } from '../../../../store/reducers/gameSlice';
import { addRoundCard } from '../../../../store/reducers/roundSlice';
import { AppDispatch, RootState } from '../../../../store/store';
import { ICardData } from '../../type';

export function handleClosedCardClick(cardData: ICardData) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    const {
      round: { roundCards },
    } = getState();
    switch (roundCards.length) {
      case 0:
        dispatch(addRoundCard(cardData));
        dispatch(incrementRoundNumber());
        break;
      case 1:
        dispatch(addRoundCard(cardData));
        dispatch(setIsCardsClickable(false));
        break;
      default:
        return;
    }
  };
}
