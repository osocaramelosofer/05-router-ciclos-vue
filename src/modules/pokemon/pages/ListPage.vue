<template>
    <div>
      <h1>List Page</h1>

      <ul ref="scrollComponent">
        <template v-for="pokemon in pokemonsWithImages" :key="pokemon.image" >
          <PokemonCard :pokemon-image="pokemon.image" :pokemon-name="pokemon.name" :pokemon-id="pokemon.id" />
        </template>
      </ul>
    </div>
</template>

<script>
import {loadPokemons, getPokemonsImage} from "@/helpers/getPokemons"
import { defineAsyncComponent } from "vue";

export default {
  components:{
    PokemonCard: defineAsyncComponent( ()=> import("../components/PokemonCard")),
    PokemonCardSkeleton: defineAsyncComponent( ()=> import("../components/PokemonCardSkeleton"))

  },
  data(){
    return{
      pokemons: [],
      pokemonsWithImages: [],
      offset: 0,
    }
  },
  watch: {
    async offset(){
      const morePokemons = await loadPokemons(10, this.offset )
      const morePokemonsWithImage = await getPokemonsImage(morePokemons)
      this.pokemonsWithImages = [...this.pokemonsWithImages, ...morePokemonsWithImage]
    }
  },
  async created(){
    try {
      // obtenemos la lista de los pokemon con name & url
      this.pokemons = await loadPokemons(10,0)

      // Recorremos la lsita de pokemons para hacer un array con las urls
      this.pokemonsWithImages = await getPokemonsImage(this.pokemons)

    }catch(error){
      console.log(error)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    async handleScroll(e) {
      let element = this.$refs.scrollComponent
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        this.offset += 10
      }
    },
  }
}
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>