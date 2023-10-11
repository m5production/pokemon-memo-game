import { AppThunk } from '../../store';
import { resetRoundNumberCtr, setPokemonCards, toggleWin } from '../gameSlice';

export const resetGame =
  (newPokemonCtr?: number): AppThunk =>
  (dispatch) => {
    dispatch(toggleWin());
    dispatch(setPokemonCards(newPokemonCtr));
    dispatch(resetRoundNumberCtr());
  };
