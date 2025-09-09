import axios from "axios";
import pLimit from "p-limit";

import type { Pokemon } from "@/types/pokemons";

export async function getAllPokemons(
    limit: number,
    offset: number,
): Promise<string[]> {
    const POKEMONS_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const response = await axios.get(POKEMONS_URL);

    if (response.status !== 200) {
        throw new Error("Failed to fetch pokemons");
    }

    const data = await response.data;

    return data.results.map((pokemon: any) => pokemon?.url);
}

export async function getPokemonDetailsByBatch(
    urls: string[],
    opts: {
        limit: number; // How many pokemons to fetch at parallel
        continueOnError: boolean; // If true, will continue fetching even if one of the requests fails
        timeout: number; // Timeout in milliseconds
    },
): Promise<Pokemon[]> {
    const limit = pLimit(opts.limit);

    const promises = urls.map((url) =>
        limit(async () => {
            try {
                const response = await axios.get(url, { timeout: opts.timeout });
                return {
                    name: response.data.name,
                    front_sprite: response.data.sprites.front_default,
                    types: response.data.types.map((type: any) => type.type.name),
                };
            } catch (error) {
                console.warn("Failed to fetch pokemon: ", error, url);
                return null;
            }
        }),
    );

    const results = await Promise.all(promises);
    return results.filter((result) => result !== null);
}
