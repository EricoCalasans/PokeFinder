export const getAllPokemons = async () => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
		// const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`);
		const data = await res.json();
		return data.results
	} catch (err) {
		console.log(err);
	}
};


export const getPokemon = async (url: string) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data
	} catch (err) {
		console.log(err);
	}
};