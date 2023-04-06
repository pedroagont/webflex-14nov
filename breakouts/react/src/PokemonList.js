function PokemonList(props) {
  const { data } = props;
  return (
    <div>
      <h2>Pokemon list:</h2>
      <ul>
        {data.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
