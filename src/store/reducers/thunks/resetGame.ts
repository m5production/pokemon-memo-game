import { AppThunk } from '../../store';
import { setPokemonCards, toggleWin } from '../gameSlice';

export const resetGame =
  (newPokemonCtr?: number): AppThunk =>
  (dispatch) => {
    dispatch(toggleWin());
    dispatch(setPokemonCards(newPokemonCtr));
  };
