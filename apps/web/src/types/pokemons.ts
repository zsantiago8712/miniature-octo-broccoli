import type { inferProcedureOutput } from "@trpc/server";
import type { PokemonsRouter } from "../../../server/src/routers/pokemons_router";

export type PokemonResponse = inferProcedureOutput<
    PokemonsRouter["getPokemos"]
>["pokemons"][number];