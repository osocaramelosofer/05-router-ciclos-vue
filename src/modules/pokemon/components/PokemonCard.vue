<template>
  <li>
    <picture>
      <img :src="pokemonImage" :alt="pokemonName"/>
    </picture>
    <div>
      <span>Pokemon id: {{ pokemonId }}</span>
      <span>{{ pokemonName }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props:{
    pokemonName:{
      type: String,
      required: true,
      default: "pokemon name"
    },
    pokemonImage: {
      type: String,
      required: true,
    },
    pokemonId: {
      type: Number,
    }
  },

  data(){
    return{

    }
  }
}

</script>

<style scoped>
li {
  background-color: rgb(254 249 195);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-inline: 20px;
  margin-block: 10px;
  border-radius: 8px;
  padding-block: 20px;
}
picture{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: cornflowerblue;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
div span {
  background-color: lightsteelblue;
  padding-inline: 20px;
  border-radius: 50px;
}
</style>