import { ICardData } from '../../../components/Card/type';

export function isAllCardsOpen(cards: ICardData[]) {
  return cards.filter(({ isOpen }) => !isOpen).length < 2;
}
