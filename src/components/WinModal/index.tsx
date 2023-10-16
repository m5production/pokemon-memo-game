import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetGame } from '../../store/reducers/sharedThunks/resetGame';
import { WindowBlinder } from '../WindowBlinder';
import { StyledBtn, StyledModal } from './style';

export function WinModal() {
  const dispatch = useAppDispatch();
  const { cards } = useAppSelector((state) => state.cards);
  const { roundNumber } = useAppSelector((state) => state.game);
  const handleGameReset = () => {
    const newPokemonSetLength = cards.length / 2;
    dispatch(resetGame(newPokemonSetLength));
  };
  return (
    <WindowBlinder>
      <StyledModal>
        <h2>Congratulations! You won in {roundNumber} rounds!</h2>
        <StyledBtn type="button" onClick={handleGameReset}>
          Play again!
        </StyledBtn>
      </StyledModal>
    </WindowBlinder>
  );
}
