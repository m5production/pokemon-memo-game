import { ChangeEventHandler, useState } from 'react';
import { PokemonAmountDisplay } from '../PokemonAmountDisplay';
import { StyledCardAmountControlWrapper } from './style';
import { useAppDispatch } from '../../store/hooks';
import { setUserSetNumberOfPokemons } from '../../store/reducers/cardsSlice';

export function PokemonAmountControl() {
  const dispatch = useAppDispatch();
  const [pokemonCtr, setPokemonCtr] = useState<number>(2);

  const handleSetBtnClick = () => {
    dispatch(setUserSetNumberOfPokemons(pokemonCtr));
  };

  return (
    <StyledCardAmountControlWrapper>
      How many pokemons will you play with?
      <button type="button" onClick={handleSetBtnClick}>
        Set
      </button>
      <PokemonAmountDisplay
        pokemonCtr={pokemonCtr}
        setPokemonCtr={setPokemonCtr}
      />
    </StyledCardAmountControlWrapper>
  );
}
