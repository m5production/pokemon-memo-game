import { StyledCardsTable } from './style';
import { Card } from '../Card';
import { ICardData } from '../Card/type';

export function CardsTable({ cardsData }: { cardsData: ICardData[] }) {
  return (
    <StyledCardsTable $numberOfColumns={2}>
      {cardsData.map((cardData) => (
        <Card key={`${cardData.id}`} {...cardData} />
      ))}
    </StyledCardsTable>
  );
}
