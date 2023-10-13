import { ClosedCard } from './ClosedCard';
import { InvisibleCard } from './InvisibleCard';
import { OpenedCard } from './OpenedCard';
import { ICardData } from './type';

export function Card(cardData: ICardData) {
  const { status, src } = cardData;
  let card;
  switch (status) {
    case 'closed':
      card = <ClosedCard {...cardData} />;
      break;
    case 'opened':
      card = <OpenedCard src={src} />;
      break;
    default:
      card = <InvisibleCard />;
      break;
  }
  return card;
}
