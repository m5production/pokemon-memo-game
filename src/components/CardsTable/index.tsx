import { StyledCardsTable } from './style';
import { Card } from '../Card';
import { useAppSelector } from '../../store/hooks';

export function CardsTable() {
  const { cards: cardsData } = useAppSelector((state) => state.cards);
  return (
    <StyledCardsTable $numberOfColumns={2}>
      {cardsData.map((cardData) => (
        <Card key={`${cardData.id}`} {...cardData} />
      ))}
    </StyledCardsTable>
  );
}
