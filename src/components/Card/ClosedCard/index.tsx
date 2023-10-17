import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ICardAnimationStatus, ICardData } from '../type';
import { handleClosedCardAnimationEnd } from './helpers/handleClosedCardAnimationEnd';
import { handleClosedCardClick } from './helpers/handleClosedCardClick';
import { StyledClosedCard } from './style';

export function ClosedCard({
  cardData,
  animationStatus,
  setAnimationStatus,
}: {
  cardData: ICardData;
  animationStatus: ICardAnimationStatus;
  setAnimationStatus: (animationStatus: ICardAnimationStatus) => void;
}) {
  const dispatch = useAppDispatch();
  const { isCardsClickable } = useAppSelector((state) => state.cards);

  const onCardClick = () => {
    if (animationStatus !== 'idle' || !isCardsClickable) return;
    setAnimationStatus('open');
    dispatch(handleClosedCardClick(cardData));
  };

  const handleAnimationEnd = () => {
    dispatch(handleClosedCardAnimationEnd(cardData));
  };

  return (
    <StyledClosedCard
      onClick={onCardClick}
      onAnimationEnd={handleAnimationEnd}
      $animationStatus={animationStatus}
    />
  );
}
