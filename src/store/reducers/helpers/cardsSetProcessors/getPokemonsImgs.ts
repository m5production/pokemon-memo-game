import { pokemonImgs } from '../../../../data/pokemonImgs';

export function getPokemonsImgs(pokemonsCtr = 2): string[] {
  return [...pokemonImgs].slice(0, pokemonsCtr);
}
