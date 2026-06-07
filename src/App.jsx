import './App.css'
import './styles/grid.css'
import { FetchPokemon } from './pokemon'
import { Card, RearrangeCard } from './card'
import { useState, useEffect } from 'react'

function App() {

  const [clicked, setClicked] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchAllPokemons = async () => {
      const results = await Promise.all([FetchPokemon(25), FetchPokemon(1), FetchPokemon(143),
                  FetchPokemon(493), FetchPokemon(54), FetchPokemon(7), FetchPokemon(6), 
                  FetchPokemon(282), FetchPokemon(130), FetchPokemon(133)
      ])
      setPokemons(results)
    }
  
    fetchAllPokemons()
  }, [])

  
  function HandleClick(id){
    if(clicked.has(id)){
      console.log("GAME OVER")
      setClicked(new Set())
      setCurrentScore(0)
    } else {
      const newPokemon = RearrangeCard(pokemons);
      setPokemons(newPokemon);
      setClicked(prev => new Set(prev).add(id))
      const newScore = currentScore + 1;
      setCurrentScore(newScore)
      if(newScore > highScore) setHighScore(newScore)
    }
  }


  return (
    <>
    <Header currentScore={currentScore} highScore={highScore}/>
    <Main pokemons={pokemons} HandleClick={HandleClick}/>
    </>
  )
}

function Header({ currentScore, highScore}){
  return (
    <header>
      <h3>Current Score: {currentScore}</h3>
      <h3>High Score: {highScore}</h3>
    </header>
  )
}

function Main({ pokemons, HandleClick}){
  return (
    <main>
      <div className="card-container">
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={() => HandleClick(pokemon.id)}/>
        ))}
      </div>
    </main>
  )
}

export default App
