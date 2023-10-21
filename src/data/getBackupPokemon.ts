import { pokemonBackupImgs } from './pokemonImgs'

let backupPokemonCtr = 0;

export function getBackupPokemon() {
  const backupPokemon = {
    sprites: {
      front_default: null,
      other: {
        "official-artwork": {front_default: null, front_shiny: null},
        dream_world: {front_default: pokemonBackupImgs[backupPokemonCtr++], front_female: null},
      }
    }
  }
  return backupPokemon;
}

