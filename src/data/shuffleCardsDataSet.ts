import { ICardData } from '../components/Card/type';

export function shuffleCardsDataSet(cardsDataSet: ICardData[]) {
  const shuffledCardsDataSet = [...cardsDataSet];
  for (let i = shuffledCardsDataSet.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCardsDataSet[i], shuffledCardsDataSet[j]] = [
      shuffledCardsDataSet[j],
      shuffledCardsDataSet[i],
    ];
  }
  return shuffledCardsDataSet;
}
