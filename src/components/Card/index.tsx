import { useState } from 'react';
import { ClosedCard } from './ClosedCard';
import { InvisibleCard } from './InvisibleCard';
import { OpenedCard } from './OpenedCard';
import { ICardAnimationStatus, ICardData } from './type';

export function Card(cardData: ICardData) {
  const [animationStatus, setAnimationStatus] =
    useState<ICardAnimationStatus>('idle');
  const { status } = cardData;
  let card;
  switch (status) {
    case 'closed':
      card = (
        <ClosedCard
          cardData={cardData}
          animationStatus={animationStatus}
          setAnimationStatus={setAnimationStatus}
        />
      );
      break;
    case 'opened':
      card = (
        <OpenedCard
          cardData={cardData}
          animationStatus={animationStatus}
          setAnimationStatus={setAnimationStatus}
        />
      );
      break;
    default:
      card = <InvisibleCard />;
      break;
  }
  return card;
}
