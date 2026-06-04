import './App.css'
import './styles/grid.css'
import { fetchPokemon } from './pokemon'
import image from './assets/image.png' 
import { useState, useEffect } from 'react'

function App() {
  return (
    <>
    <Header />
    <Main />
    </>
  )
}

function Header(){
  return (
    <header>
      <h3>Current Score: </h3>
      <h3>High Score: </h3>
    </header>
  )
}

function Main(){
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchAllPokemons = async () => {
      const results = await Promise.all([fetchPokemon("pikachu"), fetchPokemon("bulbasaur"), fetchPokemon("snorlax"),
                  fetchPokemon("arceus"), fetchPokemon("psyduck"), fetchPokemon("squirtle"), fetchPokemon("charizard"), 
                  fetchPokemon("gardevoir"), fetchPokemon("gyarados"), fetchPokemon("eevee")
      ])
      setPokemons(results)
    }
  
    fetchAllPokemons()
  }, [])

  console.log(pokemons)

  return (
    <main>
      <div className="card-container">
        <div className="card">
          <img src={image}></img>
          <p>Sample Name</p>
        </div>

        <div className="card">
          <img src={image}></img>
          <p>Sample Name</p>
        </div>

        <div className="card">
          <img src={image}></img>
          <p>Sample Name</p>
        </div>

        <div className="card">
          <img src={image}></img>
          <p>Sample Name</p>
        </div>

        <div className="card">
          <img src={image}></img>
          <p>Sample Name</p>
        </div>

        <div className="card">
          <img src={image}></img>
          <p>Sample Name</p>
        </div>
      </div>

      

    </main>
  )
}

export default App
