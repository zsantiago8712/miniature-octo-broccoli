import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "../../../server/src/routers";

export type Pokemon = inferProcedureOutput<
    AppRouter["getPokemos"]
>["pokemons"][number];