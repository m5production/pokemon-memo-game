import { useAppDispatch } from '../../../store/hooks';
import { StyledCardBasic } from '../style';
import { handleCardOpen } from '../../../store/reducers/gameSlice';
import { ICardData } from '../type';

export function ClosedCard(cardData: ICardData) {
  const dispatch = useAppDispatch();
  const handleCardClick = () => dispatch(handleCardOpen(cardData));
  return <StyledCardBasic onClick={handleCardClick} />;
}
