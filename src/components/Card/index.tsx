import { StyledClosedCard, StyledOpenCard } from './style';
import { ICardData } from './type';

export function Card({ id, isOpen, src }: ICardData) {
  return (isOpen ? <StyledOpenCard src={src} /> : <StyledClosedCard />);
}
