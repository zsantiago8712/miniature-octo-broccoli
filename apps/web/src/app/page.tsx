"use client";
import { PokemonCard } from "@/components/pokemonCard";
import { getPokemons } from "@/hooks/usePokemons";

export default function Home() {
    const { data, isLoading, error } = getPokemons();

    if (error) return <div>Error: {error.message}</div>;

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <header className="mb-8 text-center">
                    <h1 className="mb-2 font-bold text-4xl text-foreground">Pokédex</h1>
                    <p className="text-muted-foreground">
                        Explora la colección de pokémons
                    </p>
                </header>

                {data && data.pokemons.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {data.pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}