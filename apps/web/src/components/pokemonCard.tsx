import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Pokemon } from "@/types/pokemons";

interface PokemonCardProps {
    pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Card className="overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-3">
                    <img
                        src={pokemon.front_sprite || "/placeholder.svg"}
                        alt={pokemon.name}
                        className="h-24 w-24 object-contain"
                        crossOrigin="anonymous"
                    />
                    <h3 className="text-center font-semibold text-lg capitalize">
                        {pokemon.name}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-1">
                        {pokemon.types.map((type, index) => (
                            <Badge
                                key={`${pokemon.name}-${type}-${index}`}
                                variant="secondary"
                                className="text-xs capitalize"
                            >
                                {type}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
