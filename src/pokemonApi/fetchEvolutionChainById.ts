import { Endpoints } from '../constants';
import { makeUrlMaker } from './helpers/makeUrl';
import { TPokemonEvolutionChain, TPokemonEvolutionChainResponse } from './type';

export async function fetchEvolutionChainById(id: number | string): Promise<TPokemonEvolutionChain> {
  const createUrl = makeUrlMaker(Endpoints.EVOLUTION_CHAIN);
  try {
    const url = createUrl(id);
    const response = await fetch(url);
    const {chain}: TPokemonEvolutionChainResponse = await response.json();
    return chain;
  } catch {
    throw new Error ('Can\'t fetch evolution chain by ID');
  }
}
