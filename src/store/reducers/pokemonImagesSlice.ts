import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTotalEvolutionChainsNumber } from '../../pokemonApi/fetchTotalEvolutionChainsNumber';
import { pokemonBackupImgs } from '../../data/pokemonImgs';
import { getRandomImageIds } from './helpers/cardsSetProcessors/getRandomImageIds';
import { fetchPokemonImgByEvoluitonChainId } from '../../pokemonApi/fetchPokemonImgByEvoluitonChainId';
import { TPokemon } from '../../pokemonApi/type';
import { setPokemonCards } from './cardsSlice';

export interface IFetchedPokemonImages {
  totalCount: number;
  isFetchedImg: boolean;
}

const initialState: IFetchedPokemonImages = {
  totalCount: 0,
  isFetchedImg: false,
};

export const fetchAndSetImgs = createAsyncThunk(
  'fetchedPokemonImages/fetchAndSetImgs',
  async (
    { maxNumber, numberOfImgs }: { maxNumber: number; numberOfImgs: number },
    { dispatch }
  ) => {
    const currentImgIds: number[] = getRandomImageIds(maxNumber, numberOfImgs);
    const currentPokemons: TPokemon[] = await Promise.all(
      currentImgIds.map(
        async (id) => await fetchPokemonImgByEvoluitonChainId(id)
      )
    );    
    const currentImgSrcs = currentPokemons.map(
      ({
        sprites: {
          front_default: DefaultFD,
          other: {
            'official-artwork': { front_default: OAFD },
            dream_world: { front_default: DWFD },
          },
        },
      }) => (OAFD || DWFD || DefaultFD) as string
    );
    dispatch(setPokemonCards(currentImgSrcs));
  }
);

export const getTotalEvolutionChainsNumber = createAsyncThunk(
  'fetchedPokemonImages/getTotalEvolutionChainsNumber',
  async (payload, { dispatch }) => {
    let totalEvolutionChainsNumber = 0;
    try {
      totalEvolutionChainsNumber = await fetchTotalEvolutionChainsNumber();
      dispatch(setTotalCount(totalEvolutionChainsNumber));
    } catch {
      dispatch(setTotalCount(pokemonBackupImgs.length));
    }
  }
);

export const fetchedPokemonImagesSlice = createSlice({
  name: 'fetchedPokemonImages',
  initialState,
  reducers: {
    setTotalCount: (state, { payload }: PayloadAction<number>) => {
      state.totalCount = payload;
    },
  },
});

export const { setTotalCount } =
  fetchedPokemonImagesSlice.actions;
export default fetchedPokemonImagesSlice.reducer;
