import { useAppSelector } from '../../store/hooks';
import { StyledRoundCounter } from './style';

export function RoundCounter() {
  const { roundNumber } = useAppSelector((state) => state.game);
  return <StyledRoundCounter>{roundNumber}</StyledRoundCounter>;
}
