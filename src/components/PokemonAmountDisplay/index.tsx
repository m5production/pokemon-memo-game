import {
  StyledAmountDisplayWrapper,
  StyledDecreaseBtn,
  StyledIncreaseBtn,
  StyledPokemonAmountDisplay,
} from './style';

export function PokemonAmountDisplay({
  pokemonCtr,
  setPokemonCtr,
}: {
  pokemonCtr: number;
  setPokemonCtr: (newCtr: number) => void;
}) {
  const isDisabledIncreaseCtrBtn = pokemonCtr >= 15;
  const isDisabledDecreaseCtrBtn = pokemonCtr <= 2;

  const increasePokemonCtr = () => {
    setPokemonCtr(pokemonCtr + 1);
  };
  const decreasePokemonCtr = () => {
    setPokemonCtr(pokemonCtr - 1);
  };
  return (
    <StyledAmountDisplayWrapper>
      <StyledIncreaseBtn disabled={isDisabledIncreaseCtrBtn} onClick={increasePokemonCtr}/>
      <StyledPokemonAmountDisplay>{pokemonCtr}</StyledPokemonAmountDisplay>
      <StyledDecreaseBtn disabled={isDisabledDecreaseCtrBtn} onClick={decreasePokemonCtr}/>
    </StyledAmountDisplayWrapper>
  );
}
