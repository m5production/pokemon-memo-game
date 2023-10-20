export type TGeneralResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
};

export type TPokemonEvolutionChainResponse = {
  chain: TPokemonEvolutionChain;
  id: number;
};

export type TPokemonEvolutionChain = {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
};

export type TPokemonSpecies = {
  varieties: [
    {
      is_default: boolean;
      pokemon: {
        name: string;
        url: string;
      };
    },
  ];
};

export type TPokemon = {
  sprites: {
    front_default: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      'official-artwork': {
        front_default: string | null;
        front_shiny: string | null;
      };
    };
  };
};
