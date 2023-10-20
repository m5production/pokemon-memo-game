import { TPokemon, TPokemonEvolutionChain, TPokemonSpecies } from './type';

export async function fetchPokemoFromEvolutionChain({
  species: { url },
}: TPokemonEvolutionChain): Promise<TPokemon> {
  let species: null | TPokemonSpecies = null;
  try {
    const speciesResponse = await fetch(url);
    species = await speciesResponse.json();
  } catch {
    throw new Error('Failed to get pokemon species');
  }
  const defaultPokemonVariation = species!.varieties.find(({is_default}) => is_default);
  try {
    const pokemonResponse = await fetch(defaultPokemonVariation!.pokemon.url);
    const pokemon = await pokemonResponse.json();
    return pokemon;
  } catch {
    throw new Error('Failed to get pokemon data');
  }
}
