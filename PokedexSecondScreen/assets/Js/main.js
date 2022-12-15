import pokeApi from "./poke-api.js";
import Pokemon from "./pokemon-model.js";

const pokemonList = document.getElementById('pokemonList')



const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon = new Pokemon()) {
    return `
        <li class="pokemon  
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <div class="ability">${pokemon.abilities.map()}</div>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(){
    pokeApi.getPokemons().then((pokemons = []) => {
        const newHtml = convertPokemonToLi(pokemons[0])
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

