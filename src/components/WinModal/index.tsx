import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetGame } from '../../store/reducers/gameSlice';
import { WindowBlinder } from '../WindowBlinder';
import { StyledBtn, StyledModal } from './style';

export function WinModal() {
  const dispatch = useAppDispatch();
  const { length } = useAppSelector((state) => state.cards);
  const handleGameReset = () => {
    dispatch(resetGame(length));
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
