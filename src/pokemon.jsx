export async function fetchPokemon(pokemon){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()

    return data
}

