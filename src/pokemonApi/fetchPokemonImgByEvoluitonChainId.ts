import { fetchEvolutionChainById } from './fetchEvolutionChainById';
import { fetchPokemoFromEvolutionChain } from './fetchPokemonFromEvolutionChain';
import { TPokemon } from './type';

export async function fetchPokemonImgByEvoluitonChainId(id: number): Promise<TPokemon> {
  try {
    const evolutionChain = await fetchEvolutionChainById(id);
    const pokemon = await fetchPokemoFromEvolutionChain(evolutionChain);
    return pokemon;
  } catch (e) {
    throw e;
  }
}