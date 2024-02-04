let limit = 20;
const content = document.querySelector(".content")
const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`


function convertPokemonTypesLi(pokemonsTypes) {
    return pokemonsTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function converterPokemons(pokemon) {
    
    return `<li class="pokemon">
        <span class="number">${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesLi(pokemon.types).join('')}
            </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}"
            alt=${pokemon.name}>
        </div>

    </li>` 
}
        
        
const listPokemons = document.getElementById("pokemonList")

pokeapi.getPokemons().then((pokemons = []) => {
    listPokemons.innerHTML += pokemons.map(converterPokemons).join('')
    
})




