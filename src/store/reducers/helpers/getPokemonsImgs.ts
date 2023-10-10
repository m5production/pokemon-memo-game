import { pokemonImgs } from '../../../data/pokemonImgs';

export function getPokemonsImgs(pokemonsCtr: number): string[] {
  return [...pokemonImgs].slice(0, pokemonsCtr);
}