import { useAppDispatch } from '../../../store/hooks';
import { handleCardOpen } from '../../../store/reducers/thunks/handleCardOpen';
import { StyledCardBasic } from '../style';
import { ICardData } from '../type';

export function ClosedCard(cardData: ICardData) {
  const dispatch = useAppDispatch();
  const handleCardClick = () => dispatch(handleCardOpen(cardData));
  return <StyledCardBasic onClick={handleCardClick} />;
}
