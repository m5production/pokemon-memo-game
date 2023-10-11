import { ClosedCard } from './ClosedCard';
import { OpenedCard } from './OpenedCard';
import { ICardData } from './type';

export function Card(cardData: ICardData) {
  const { isOpen, src } = cardData;
  return isOpen ? <OpenedCard src={src} /> : <ClosedCard {...cardData} />;
}
