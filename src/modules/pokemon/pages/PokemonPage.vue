<template>
  <div>
    <h1>Pokemon Page <span>#{{ id }}</span></h1>
    <div v-if="pokemon">
      <picture>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
        type: Number,
        required: true
    }
  },
  data() {
    return {
    //   id: null,
    pokemon: null
  };
  },
  created() {
    // const { id } = this.$route.params;
    // this.id = id;

    this.getPokemon()
  },
  watch:{
    // Estar pendiente cuando cambie la prop id
    id(){
      this.getPokemon()
    }
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json())
        console.log(pokemon)
        this.pokemon = pokemon
      } catch (error) {
        console.log("No hay nada que hacer aqui, let get out of here!");
        this.$router.push('/')
      }
    }
  }
};
</script>

<style>
</style>