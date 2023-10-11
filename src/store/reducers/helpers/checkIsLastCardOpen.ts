import { ICardData } from '../../../components/Card/type';

export function checkIsLastCardOpen(cards: ICardData[]) {
  return cards.filter(({ isOpen }) => !isOpen).length < 2;
}
