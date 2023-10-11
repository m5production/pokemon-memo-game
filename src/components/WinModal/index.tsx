import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetGame } from '../../store/reducers/sharedThunks/resetGame';
import { WindowBlinder } from '../WindowBlinder';
import { StyledBtn, StyledModal } from './style';

export function WinModal() {
  const dispatch = useAppDispatch();
  const { length } = useAppSelector((state) => state.cards);
  const roundsNumber = useAppSelector((state) => state.roundNumber);
  const handleGameReset = () => {
    const newPokemonSetLength = length / 2;
    dispatch(resetGame(newPokemonSetLength));
  };
  return (
    <WindowBlinder>
      <StyledModal>
        <h2>Congratulations! You won in {roundsNumber} rounds!</h2>
        <StyledBtn type="button" onClick={handleGameReset}>
          Play again!
        </StyledBtn>
      </StyledModal>
    </WindowBlinder>
  );
}
