import { ChangeEventHandler, useState } from 'react';
import { PokemonAmountDisplay } from '../PokemonAmountDisplay';
import { StyledCardAmountControlWrapper, StyledPokemonCtrControlLabel } from './style';
import { useAppDispatch } from '../../store/hooks';
import { setPokemonCards } from '../../store/reducers/gameSlice';

export function PokemonAmountControl() {
  const dispatch = useAppDispatch();
  const [pokemonCtr, setPokemonsCtr] = useState<number>(2);
  const handlePokemonCtrChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newPokemonsCtr = Number(e.target.value);
    setPokemonsCtr(newPokemonsCtr);
    dispatch(setPokemonCards(newPokemonsCtr));
  };

  return (
    <StyledCardAmountControlWrapper>
      How many pokemons will you play with?
      <StyledPokemonCtrControlLabel>
        <input
          type="range"
          step={1}
          min={2}
          max={8}
          value={pokemonCtr}
          onChange={handlePokemonCtrChange}
        />
      </StyledPokemonCtrControlLabel>
      <PokemonAmountDisplay pokeomonCtr={pokemonCtr} />
    </StyledCardAmountControlWrapper>
  );
}
