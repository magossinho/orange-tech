import pokeApi from "./poke-api.js";
import Pokemon from "./pokemon-model.js";

const pokemonList = document.getElementById('pokemonList')



const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon = new Pokemon()) {
    return `
        <h1>${pokemon.name}</h1>
        <li class="pokemon">
            <span class="number">#00${pokemon.number}</span>
            
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
        </ol>
            <div class="detail">
           
            <img src="${pokemon.photo}" alt="${pokemon.name}">
                
                <div class="stats">${pokemon.stats.map((statsSlot) => statsSlot.name).join('')}
              
                    </div>
                    <section class="pokemon__detail">
                    <h1> Sobre </h1>
                    ${pokemon.stats.map(stat => `<div class="pokemonStats"> <strong> ${stat.stat.name}: </strong> ${stat.base_stat} </div>`).join('')}
                    <div class="pokemonAbilities"> <strong> Abilities: </strong>  ${pokemon.abilities.map(abilitySlot => abilitySlot.ability.name).join(", ")} </div>
                  </section>
               

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