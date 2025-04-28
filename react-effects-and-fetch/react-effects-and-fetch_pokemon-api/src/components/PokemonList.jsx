import { useEffect, useState } from "react";

// fetches a list of Pokémon from the public PokeAPI
// and displays their names in an unordered list
export default function PokemonList() {
  // local state `useState` to hold the array of Pokémon
  const [pokemon, setPokemon] = useState([]);

  // fetch Pokémon as soon as the component mounts
  // the empty dependency array `[]` means this effect runs only once
  useEffect(() => {
    // define the async function inside the effect, so we can call it immediately
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();

        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon(); // trigger the fetch
  }, []); // run once on mount

  return (
    <main>
      <ul>
        {/* render each Pokémon name in its own <li>.
        Using the name as the key is safe here
        because names are unique in this dataset */}
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
