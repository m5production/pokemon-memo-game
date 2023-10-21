import { fetchEvolutionChainById } from './fetchEvolutionChainById';
import { fetchPokemoFromEvolutionChain } from './fetchPokemonFromEvolutionChain';
import { TPokemon } from './type';

export async function fetchPokemonByEvoluitonChainId(id: number): Promise<TPokemon> {
  try {
    const evolutionChain = await fetchEvolutionChainById(id);
    const pokemon = await fetchPokemoFromEvolutionChain(evolutionChain);
    return pokemon;
  } catch (e) {
    throw e;
  }
}