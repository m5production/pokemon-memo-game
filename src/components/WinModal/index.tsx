import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setIsCardsClickable } from '../../store/reducers/cardsSlice';
import { resetRound } from '../../store/reducers/roundSlice';
import { resetGame } from '../../store/reducers/sharedThunks/resetGame';
import { WindowBlinder } from '../WindowBlinder';
import { StyledBtn, StyledModal } from './style';

export function WinModal() {
  const dispatch = useAppDispatch();
  const { userSetNumberOfPokemons } = useAppSelector((state) => state.cards);
  const { roundNumber } = useAppSelector((state) => state.game);
  const handleGameReset = () => {
    dispatch(resetRound());
    dispatch(resetGame(userSetNumberOfPokemons));
    dispatch(setIsCardsClickable(true));
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
