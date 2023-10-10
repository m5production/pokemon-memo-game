import { ClosedCard } from './ClosedCard';
import { OpenCard } from './OpenCard';
import { ICardData } from './type';

export function Card(cardData: ICardData) {
  const { isOpen, src } = cardData;
  return isOpen ? <OpenCard src={src} /> : <ClosedCard {...cardData} />;
}
