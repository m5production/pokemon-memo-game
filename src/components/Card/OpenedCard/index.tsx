import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ICardAnimationStatus, ICardData } from '../type';
import { handleOpenCardOpenAnimationEnd } from './helpers/handleOpenCardOpenAnimationEnd';
import { StyledOpenedCard } from './style';
import { handleOpenCardCloseAnimationEnd } from './helpers/handleOpenCardCloseAnimationEnd';

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
    if (isAnimationOnRoundLoose) {
      dispatch(handleOpenCardCloseAnimationEnd());
    } else {
      setAnimationStatus('idle');
      dispatch(handleOpenCardOpenAnimationEnd());
    }
  };
  return (
    <StyledOpenedCard
      $src={src}
      $animationStatus={animationStatus}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
