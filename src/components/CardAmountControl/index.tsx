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

  const increasePokemonCtr = () => {
    setPokemonCtr(pokemonCtr + 1);
  };
  const decreasePokemonCtr = () => {
    setPokemonCtr(pokemonCtr - 1);
  };

  const isIncreaseBtnDisabled = pokemonCtr >= 15;
  const isDecreaseBtnDisabled = pokemonCtr <= 2;

  return (
    <StyledCardAmountControlWrapper>
      How many pokemons will you play with?
      <button
        type="button"
        onClick={increasePokemonCtr}
        disabled={isIncreaseBtnDisabled}
      >
        +
      </button>
      <button
        type="button"
        onClick={decreasePokemonCtr}
        disabled={isDecreaseBtnDisabled}
      >
        -
      </button>
      <button type="button" onClick={handleSetBtnClick}>
        Set
      </button>
      <PokemonAmountDisplay pokeomonCtr={pokemonCtr} />
    </StyledCardAmountControlWrapper>
  );
}
