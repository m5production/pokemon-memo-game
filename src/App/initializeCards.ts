import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { fetchTotalEvolutionChainsNumber } from '../pokemonApi/fetchTotalEvolutionChainsNumber';
import { fetchAndSetImgs, setTotalCount } from '../store/reducers/pokemonImagesSlice';

export const initializeCards = createAsyncThunk(
  'cards/initializeCards',
  async (payload, { dispatch, getState }) => {
    const {cards: {userSetNumberOfPokemons}} = getState() as RootState;
    const totalVariantsCtr = await fetchTotalEvolutionChainsNumber();
    dispatch(fetchAndSetImgs({maxNumber: totalVariantsCtr, numberOfImgs: userSetNumberOfPokemons}));
    dispatch(setTotalCount(totalVariantsCtr));
  }
);
