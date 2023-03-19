<template>
    <div>
      <h1>List Page</h1>

      <ul ref="scrollComponent">
<!--        <li v-for="(pokemon, index) in pokemons"-->
<!--            :key="pokemon.url"-->
<!--        >-->
<!--          <img v-if="pokemonImages" :src="pokemonImages[index]" :alt="pokemon.name">-->
<!--          <span>{{ pokemon.name }}</span>-->
<!--        </li>-->
        <li v-for="pokemon in pokemonsWithImages" :key="pokemon.image">
          <span>{{ pokemon.name }}</span>
          <img :src="pokemon.image" :alt="pokemon.name"/>
        </li>
      </ul>
    </div>
</template>
<script>
import pokemonApi from "@/api/pokemonApi";
import {loadPokemons, getPokemonsImage} from "@/helpers/getPokemons"

export default {
  data(){
    return{
      pokemons: [],
      pokemonImages: [],
      pokemonDetails: {},

      pokemons2: [],
      pokemonsWithImages: [],
      offset: 0,
      isAtBottom: false
    }
  },
  components:{

  },
  watch: {
    pokemons() {
      this.pokemons.forEach( async ( pokemon )=> {
        const resp = await this.getPokemon( pokemon.url )
        // this.pokemonDetails[ pokemon.name ] = resp
        this.pokemonImages.push(resp.sprites.front_default)
      })
    },
    async offset(){
      if(this.isAtBottom === true){
        console.log("loading more pokemons")
        this.offset += 10
        const morePokemons = await loadPokemons(10, this.offset )
        console.log("more pokemos result ???", morePokemons)

        const morePokemonsWithImage = await getPokemonsImage(morePokemons)
        this.pokemonsWithImages = [...this.pokemonsWithImages, ...morePokemonsWithImage]
        console.log("POKEEEEMONS ", morePokemonsWithImage)
      }
    }
  },
  computed: {

  },
  mounted() {
    this.getPokemonList()

    window.addEventListener("scroll", this.handleScroll)
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  async created(){
    try {
      // obtenemos la lista de los pokemon con name & url
      this.pokemons2 = await loadPokemons(10,0)

      // Recorremos la lsita de pokemons para hacer un array con las urls
      this.pokemonsWithImages = await getPokemonsImage(this.pokemons2)

    }catch(error){
      console.log(error)
    }
  },
  methods: {
    async handleScroll(e) {

      let element = this.$refs.scrollComponent
      console.log("scroll ",element)
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        this.isAtBottom = true
        // console.log("load more pokemons")
        this.offset += 10
        // const morePokemons = await loadPokemons(10, this.offset )
        // const morePokemonsWithImage = await getPokemonsImage(morePokemons)
        // this.pokemonsWithImages += morePokemonsWithImage
        // console.log("POKEEEEMONS ", morePokemonsWithImage)

      }
      },
    async getPokemonList(){
      try {
        const { results } = (await pokemonApi.get("pokemon?limit=10")).data
        this.pokemons = results
      } catch(error) {
        console.log(error)
      }
    },

    async getPokemon( url ) {
      try {
        return await fetch(url).then( r => r.json())
      } catch (error) {
        return error
      }
    }
  }
}
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: rgb(254 249 195);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-inline: 20px;
  margin-block: 10px;
  border-radius: 8px;
}
</style>