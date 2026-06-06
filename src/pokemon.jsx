export async function FetchPokemon(pokemon){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()

    return {
        id: data.id,
        name: data.name,
        front_shiny: data.sprites.front_shiny
    }
}

