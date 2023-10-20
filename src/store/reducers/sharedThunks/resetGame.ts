import { AppThunk, RootState } from '../../store';
import { resetRoundNumberCtr } from '../gameSlice';
import { fetchAndSetImgs } from '../pokemonImagesSlice';

export const resetGame =
  (newPokemonCtr?: number): AppThunk =>
  (dispatch, getState) => {
    const {fetchedPokemonImages: {totalCount}} = getState() as RootState;
    dispatch(fetchAndSetImgs({maxNumber: totalCount, numberOfImgs: newPokemonCtr || 2}));
    dispatch(resetRoundNumberCtr());
  };
