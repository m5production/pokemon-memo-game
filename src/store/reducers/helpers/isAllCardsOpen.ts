import { ICardData } from '../../../components/Card/type';

export function isAllCardsOpen(cards: ICardData[]) {
  const closedCard = cards.find(({ status }) => status === 'closed');
  return !closedCard;
}
