import { setCardStatus } from '../../../../store/reducers/cardsSlice';
import { incrementRoundCardsAnimationCtr } from '../../../../store/reducers/roundSlice';
import { AppDispatch } from '../../../../store/store';
import { ICardData } from '../../type';

export function handleClosedCardOpenAnimationEnd({ id }: ICardData) {
  return function (dispatch: AppDispatch) {
    dispatch(setCardStatus({ id, status: 'opened' }));
  };
}
