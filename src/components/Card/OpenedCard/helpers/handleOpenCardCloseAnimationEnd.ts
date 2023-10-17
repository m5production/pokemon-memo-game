import { setCardStatus } from '../../../../store/reducers/cardsSlice';
import { AppDispatch, RootState } from '../../../../store/store';

export function handleOpenCardCloseAnimationEnd() {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    const {
      round: { roundCards },
    } = getState();
    const [{ id: firstId }, { id: secondId }] = roundCards;
    dispatch(setCardStatus({ id: firstId, status: 'closed' }));
    dispatch(setCardStatus({ id: secondId, status: 'closed' }));
  };
}
