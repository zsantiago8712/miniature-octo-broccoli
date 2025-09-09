import {
    publicProcedure,
    router,
} from "../lib/trpc";


import { getAllPokemons, getPokemonDetailsByBatch } from "../services/pokemons";

export const pokemonRouter = router({
    healthCheck: publicProcedure.query(() => {
        return "OK";
    }),

    getPokemos: publicProcedure.query(async () => {
        const limit = 1000;
        const offset = 0;
        const allRawPokemons = await getAllPokemons(limit, offset);

        if (!allRawPokemons) {
            throw new Error("No pokemons found");
        }

        const pokemons = await getPokemonDetailsByBatch(allRawPokemons, {
            limit: 20,
            continueOnError: false,
            timeout: 1000,
        });

        if (!pokemons) {
            throw new Error("No pokemons found");
        }

        return {
            total: pokemons.length,
            pokemons,
        };
    }),
});

export type PokemonsRouter = typeof pokemonRouter;
