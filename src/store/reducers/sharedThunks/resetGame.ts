import { AppThunk } from '../../store';
import { setPokemonCards } from '../cardsSlice';
import { resetRoundNumberCtr, toggleWin } from '../gameSlice';
import { resetRoundCards } from '../roundSlice';

export const resetGame =
  (newPokemonCtr?: number): AppThunk =>
  (dispatch) => {
    dispatch(toggleWin());
    dispatch(setPokemonCards(newPokemonCtr));
    dispatch(resetRoundNumberCtr());
    dispatch(resetRoundCards());
  };
