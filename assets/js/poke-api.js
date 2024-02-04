const pokeapi = {}

pokeapi.getPokemonsDatail =  (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}
pokeapi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonsDatail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}