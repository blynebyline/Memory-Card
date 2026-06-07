export function RearrangeCard(pokemons){
  const shuffled = [...pokemons]; 
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    
    const j = Math.floor(Math.random() * (i + 1)); 
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
  }
  
  return shuffled;
}

export function Card({ pokemon, onClick }){
  return (
    <button className="card" onClick={onClick}>
      <img src={pokemon.front_shiny} alt={pokemon.name}></img>
      <p>{pokemon.name}</p>
    </button>
  )
}