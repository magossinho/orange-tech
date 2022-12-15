import Pokemon from "./pokemon-model.js"
const pokeApi = {

    getPokemonDetail: (pokemon) => {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
    },
    
    getPokemons: (offset = 1, limit = 1) => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)
    }
    
}

function convertPokeApiDetailToPokemon(pokeDetail) {
    console.log(pokeDetail)
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const [type] = types
   
    const pokemon = new Pokemon({abilities:pokeDetail.abilities ,name:pokeDetail.name, type:pokeDetail.type, number:pokeDetail.id, types:pokeDetail.types, photo:pokeDetail.sprites.other.dream_world.front_default})
    return pokemon
}
export default pokeApi
