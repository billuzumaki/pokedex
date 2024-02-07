const urlParam = new URLSearchParams(window.location.search);
const pokeId = urlParam.get('id');

const type = document.querySelector(".type")
const pokeInfo = document.querySelector(".pokeInfo")
const image = document.querySelector(".image")


function moreInfo(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((pokemon) => {
        pokeInfo.innerHTML = 
        `
        <div class="layout-top ${pokemon.types[0].type.name}">
        <div class="deteil">
            <h2 class="name">${pokemon.name}</h2>
            <span class="id">#${pokemon.id}</span>
        </div>

        <span class="type">${pokemon.types[0].type.name}</span>

        <div class="image">
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">            
        </div>

    </div>

    <div class="pokemon-information">

        <div class="status">
            <h3>Status</h3>
            <ul>
                <li>HP: ${pokemon.stats[0].base_stat}</li>
                <li>altura: ${pokemon.height}</li>
                <li>ordem: ${pokemon.order}</li>
        
            </ul>
        </div>

        <div class="skills">
            <h3>Habilidades</h3>
            <ul>
                <li>${pokemon.abilities[0].ability.name}</li>
                <li>${pokemon.abilities[1].ability.name}</li>
            </ul>
        </div>

    </div>`
        
    })
}

moreInfo(pokeId)

