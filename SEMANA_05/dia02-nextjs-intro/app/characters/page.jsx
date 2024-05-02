const fetchRickAndMorty = async () => {

  const url = 'https://rickandmortyapi.com/api/character'
  const response = await fetch(url)

  const data = await response.json()

  return data.results
}

const CharactersPage = async () => {
  const characters = await fetchRickAndMorty()

  return (
    <>
      <h1 className="text-3xl text-center">CharactersPage</h1>
      <div className="grid grid-cols-6 gap-2">
        {characters.map(character => {
          return(
            <div className="rounded border-2 border-gray-600 w-1/2">
              <figure>
                <img src={character.image} alt={character.name}/>
              </figure>
              <div className="p-2">
                <span key={character.id}>{character.name}</span>
                <h2 className="font-semibold">Estado</h2>
                <h3>{character.status}</h3>
                <h2 className="font-semibold">Genero</h2>
                <h3>{character.gender}</h3>
                <h2 className="font-semibold">Especie</h2>
                <h3>{character.species}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CharactersPage