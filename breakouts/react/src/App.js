import { useState, useEffect } from 'react';

import './App.css';

import PokemonList from './PokemonList';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  // const handleClick = () => {
  //   console.log('catch them all!');
  // fetch('https://pokeapi.co/api/v2/pokemon')
  //   .then((res) => res.json())
  //   .then((data) => setPokemonData(data.results));
  // };

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://pokeapi.co/api/v2/pokemon', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Hello from my App</h1>
      {/* <button onClick={handleClick}>Catch them all!</button> */}
      <PokemonList data={pokemonData} />
    </>
  );
}

export default App;
