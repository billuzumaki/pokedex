const loadMoreButton = document.getElementById('loadMoreButton')
const content = document.querySelector(".content")
const listPokemons = document.getElementById("pokemonList")

const maxRecords = 150
const limit = 5;
let offset = 0;

function converterPokemons(pokemon) {
    
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <a href="pokeInfo.html?id=${pokemon.number}" target="_blank">
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
            alt=${pokemon.name}>
        </div>
        </a>
    </li>
    <a/>` 
}
                

function loadPokemonItems(offset, limit) {
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(converterPokemons).join('')
        listPokemons.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newlimit = maxRecords - offset
        loadPokemonItems(offset, newlimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {

        loadPokemonItems(offset, limit)
    }
})



