import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetGame } from '../../store/reducers/thunks/resetGame';
import { WindowBlinder } from '../WindowBlinder';
import { StyledBtn, StyledModal } from './style';

export function WinModal() {
  const dispatch = useAppDispatch();
  const { length } = useAppSelector((state) => state.cards);
  const handleGameReset = () => {
    const newPokemonSetLength = length / 2;
    dispatch(resetGame(newPokemonSetLength));
  };
  return (
    <WindowBlinder>
      <StyledModal>
        <h2>Congratulations! You win!</h2>
        <StyledBtn type="button" onClick={handleGameReset}>
          Play again!
        </StyledBtn>
      </StyledModal>
    </WindowBlinder>
  );
}
