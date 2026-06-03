import './App.css'
import './styles/grid.css'
import image from './assets/image.png' 

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
