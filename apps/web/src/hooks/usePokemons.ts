import { useQuery } from "@tanstack/react-query";
import { trpc } from "../utils/trpc";

export function getPokemons() {
    return useQuery(trpc.getPokemos.queryOptions());
}
