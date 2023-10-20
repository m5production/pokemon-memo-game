import { Endpoints } from '../constants';
import { makeUrlMaker } from './helpers/makeUrl';
import { TGeneralResponseType } from './type';

export async function fetchTotalEvolutionChainsNumber() {
  const createUrl = makeUrlMaker(Endpoints.EVOLUTION_CHAIN);
  try {
    const response = await fetch(createUrl());
    const { count }: TGeneralResponseType = await response.json();
    return count;
  } catch {
    throw new Error('Can\'t get total number of pokemon forms from the server');
  }
}
