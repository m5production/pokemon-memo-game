import { Endpoints, POKEMON_API_BASE_URL } from '../../constants';

export function makeUrlMaker(endpoint: Endpoints) {
  return (...args: Array<string | number>) => {
    const joinedEndpoint = [POKEMON_API_BASE_URL, endpoint, ...args].join('/');
    const url = new URL(joinedEndpoint);
    return url;
  };
}
