import { prepareCardData } from './prepareCardData';
import { shuffleCardsDataSet } from './shuffleCardsDataSet';

export function getShuffledCardsDataSet(imgSrcs: string[]) {
  const doubledImgs = [...imgSrcs, ...imgSrcs];
  const cardsData = doubledImgs.map((src) => prepareCardData(src));
  return shuffleCardsDataSet(cardsData);
}
