"use client"

import Image from "next/image";
import { PokeCard } from "./components";
import { useEffect, useState } from "react";
import { getAllPokemons } from "./api/pokeApi";
import { Result } from "postcss";
import { PokeBase } from "./class/pokeBase";
import { InView, useInView } from "react-intersection-observer";

export default function Home() {

  const [pokemonList, setPokemonList] = useState<PokeBase[]>([]);

  const { ref, inView, entry } = useInView({
    
  });

  useEffect(() => {
    // Chama a API e armazena os dados
    const fetchPokemon = async () => {
      try {
        const data = await getAllPokemons();
        const pokemonArray = data.map((e: any) => new PokeBase(e));
        setPokemonList(pokemonArray);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemon();
  }, []);

  
  return (
    <main className="min-h-screen flex-col items-center p-10 py-20">
      <div className="flex flex-wrap  w-full items-center justify-center font-mono text-sm ">

        {pokemonList.map((pokemon, index) => (

          // eslint-disable-next-line react/jsx-key
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                <PokeCard key={index} pokeInfo={pokemon} onScreen={inView} />
              </div>
            )}
          </InView>
        ))}

      </div>
    </main>
  );
}
