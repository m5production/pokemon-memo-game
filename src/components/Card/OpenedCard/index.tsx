import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ICardAnimationStatus, ICardData } from '../type';
import { handleOpenCardAnimationEnd } from './helpers/handleOpenCardAnimationEnd';
import { StyledOpenedCard } from './style';

export function OpenedCard({
  cardData,
  animationStatus,
  setAnimationStatus,
}: {
  cardData: ICardData;
  animationStatus: ICardAnimationStatus;
  setAnimationStatus: (newAnimationStatus: ICardAnimationStatus) => void;
}) {
  const dispatch = useAppDispatch();
  const { isAnimationOnRoundLoose } = useAppSelector((state) => state.round);

  useEffect(() => {
    if (isAnimationOnRoundLoose) setAnimationStatus('close');
  }, [isAnimationOnRoundLoose]);

  const { src } = cardData;

  const handleAnimationEnd = () => {
    if (!isAnimationOnRoundLoose) setAnimationStatus('idle');
    dispatch(handleOpenCardAnimationEnd());
  };
  return (
    <StyledOpenedCard
      $src={src}
      $animationStatus={animationStatus}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
