import { ICardData } from '../../../components/Card/type';

export function checkIsLastCardOpen(cards: ICardData[]) {
  return cards.filter(({ status }) => status === 'closed').length < 2;
}
