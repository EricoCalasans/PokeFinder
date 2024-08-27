"use client"

import React, { useEffect, useState } from "react";
import { PokeBase } from '../../class/pokeBase';
import { getPokemon } from "@/app/api/pokeApi";
import { Pokemon } from "@/app/class/pokemon";



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
                console.log(pokemon)
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
        <div className="bg-gray-600 w-72 h-96 my-3 mx-2">
            {props.pokeInfo.name}
            {pokemon && pokemon.id}
        </div>
    )
}