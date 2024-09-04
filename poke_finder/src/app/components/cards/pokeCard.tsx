"use client"

import React, { useEffect, useState } from "react";
import { PokeBase } from '../../class/pokeBase';
import { getPokemon } from "@/app/api/pokeApi";
import { Pokemon } from "@/app/class/pokemon";
import Image from 'next/image'



type pokeInfo = {
    key: number
    onScreen: boolean
    pokeInfo: PokeBase
}

export const PokeCard = (props: pokeInfo,) => {

    const [pokemon, setpokemon] = useState<Pokemon>();

    const [loaded, setLoaded] = useState<boolean>(false);


    useEffect(() => {

        const fetchPokemon = async () => {
            try {
                const data = await getPokemon(props.pokeInfo.url);
                // const pokemonArray = data.map((e: any) => new Pokemon(e));
                setpokemon(new Pokemon(data));
                // console.log(pokemon)
            } catch (err) {
                console.log(err);
            }
        };

        if (props.onScreen && !loaded) {
            setLoaded(true)

            fetchPokemon()

        }
    }, [props.onScreen, props.pokeInfo.url, loaded])

    return (
        <div className="bg-gray-600 w-72 h-96 my-3 mx-2 flex-col">
            <div className=" flex flex-row flex-nowrap justify-between">
                <div className="bg-red-700 w-full mx-2 px-1 outline">{pokemon && pokemon.name}</div>
                <div className="bg-red-700 w-auto mx-2 px-1">{pokemon && pokemon.id}</div>
                
                
            </div>

            {pokemon?.mainImage &&
                <Image
                    src={pokemon.mainImage}
                    alt={pokemon.name}
                    width={500}
                    height={500}
                />
            }
        </div>
    )
}
