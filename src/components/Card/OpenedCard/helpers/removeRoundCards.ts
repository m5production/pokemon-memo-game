import { setCardStatus } from '../../../../store/reducers/cardsSlice';
import { AppDispatch } from '../../../../store/store';

export function removeRoundCards({
  firstId,
  secondId,
}: {
  firstId: string;
  secondId: string;
}) {
  return function (dispatch: AppDispatch) {
    dispatch(setCardStatus({ id: firstId, status: 'invisible' }));
    dispatch(setCardStatus({ id: secondId, status: 'invisible' }));
  };
}
