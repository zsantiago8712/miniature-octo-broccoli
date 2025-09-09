import {
    router,
} from "../lib/trpc";

import { pokemonRouter } from "./pokemons_router";


export const appRouter = router({
    pokemon: pokemonRouter,
})


export type AppRouter = typeof appRouter;
