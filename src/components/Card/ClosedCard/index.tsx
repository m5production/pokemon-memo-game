import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ICardAnimationStatus, ICardData } from '../type';
import { handleClosedCardCloseAnimationEnd } from './helpers/handleClosedCardCloseAnimationEnd';
import { handleClosedCardClick } from './helpers/handleClosedCardClick';
import { StyledClosedCard } from './style';
import { handleClosedCardOpenAnimationEnd } from './helpers/handleClosedCardOpenAnimationEnd';
import { useEffect } from 'react';

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
  const { isAnimationOnRoundLoose } = useAppSelector((state) => state.round);

  useEffect(() => {
    if (!isAnimationOnRoundLoose) setAnimationStatus('idle');
  }, [isAnimationOnRoundLoose]);

  const onCardClick = () => {
    if (animationStatus !== 'idle' || !isCardsClickable) return;
    setAnimationStatus('open');
    dispatch(handleClosedCardClick(cardData));
  };

  const handleAnimationEnd = () => {
    if (isAnimationOnRoundLoose) {
      dispatch(handleClosedCardCloseAnimationEnd());
    } else {
      dispatch(handleClosedCardOpenAnimationEnd(cardData));
    }
  };

  return (
    <StyledClosedCard
      onClick={onCardClick}
      onAnimationEnd={handleAnimationEnd}
      $animationStatus={animationStatus}
    />
  );
}
