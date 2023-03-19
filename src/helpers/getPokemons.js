import pokemonApi from '../api/pokemonApi'

export const loadPokemons = async( limit = 10, offset = 0) => {
  try {
    const { results }= (await pokemonApi.get(`pokemon?limit=10&offset=${offset}`)).data
    return results
  } catch(error) {
    return error
  }
}

export const getPokemonsImage = async (pokeArray) => {
  const pokemonsArray = pokeArray.map( pokemon => {
    return pokemonApi.get(pokemon.url)
  })

  const data = await Promise.all(pokemonsArray)

  const pokemonsFinal = data.map( pokemon =>{
    return { "name": pokemon.data.name, "image": pokemon.data.sprites.front_default }
  })

  console.log("pokemons final=>",pokemonsFinal)
  return pokemonsFinal
}

const getPokemon = async ( url ) => {
  try {
    return await fetch(url).then( r => r.json())
  } catch (error) {
    return error
  }
}
