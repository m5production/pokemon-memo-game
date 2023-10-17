import { AppThunk } from '../../store';
import { setPokemonCards } from '../cardsSlice';
import { resetRoundNumberCtr, toggleWin } from '../gameSlice';

export const resetGame =
  (newPokemonCtr?: number): AppThunk =>
  (dispatch) => {
    dispatch(toggleWin());
    dispatch(setPokemonCards(newPokemonCtr));
    dispatch(resetRoundNumberCtr());
  };
