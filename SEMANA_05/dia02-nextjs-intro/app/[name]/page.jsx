//import {useRouter} from "next/navigation";

const getPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const response = await fetch(url);
  return await response.json();
}

const PokemonDetailPage = async ({params}) => {
  const { name } = params

  //const router = useRouter()
  //const { query } = router

  const pokemon = await getPokemon(name)

  return (
    <>
      <div>Pokemon Page: {name}</div>
      <img src={pokemon.sprites.other['official-artwork']['front_default']} alt={name} />
    </>
  )
}
export default PokemonDetailPage