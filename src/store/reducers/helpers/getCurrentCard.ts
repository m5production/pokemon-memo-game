import { ICardData } from '../../../components/Card/type';

export function getCardById(cards: ICardData[], searchedId: string) {
  const searchedCard = cards.find(({ id }) => id === searchedId);
  if (!searchedCard)
    throw new Error('The card with the provided ID was not found');
  return searchedCard;
}
