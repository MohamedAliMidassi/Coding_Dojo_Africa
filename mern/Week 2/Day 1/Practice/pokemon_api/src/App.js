import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [pokemon, setPokemon] = useState({ results: [] })


  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
      .then(response => {
        return response.json();
      }).then(secondResponse => {
        console.log(secondResponse);
        setPokemon(secondResponse)
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="container mt-3">
        <button onClick={handleClick} type="button" className="btn btn-secondary">
          Fetch Pokemon
        </button>
        <ul className='list-group'>
          <li className='list-group-item list-group-item-action active'>The names of the pokemons</li>
          {pokemon.results.map((poke, index) => (
            <li className='list-group-item' key={index}>{poke.name}</li>
          ))}
        </ul>
      </div>

    </div >
  );
}

export default App;