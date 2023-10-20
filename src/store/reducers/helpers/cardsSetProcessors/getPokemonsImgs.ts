import { pokemonBackupImgs } from '../../../../data/pokemonImgs';

export function getPokemonsImgs(pokemonsCtr = 2): string[] {
  return [...pokemonBackupImgs].slice(0, pokemonsCtr);
}
