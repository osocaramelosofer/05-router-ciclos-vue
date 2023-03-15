<template>
  <div>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">cambiar nombre</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: "fernando"
    }
  },
  methods: {
    onChangeName(){
      console.log("Voy a cambiar el nombre a julieta")
      this.name = "Julieta"
      console.log(this.name)
    }
  },

  // Cuando necesitamos ejecutar algun tipo de validacion antes de que el componente se cree 
  beforeCreate() {
    this,name = "Juan Carlos" // esto no va a funcionar porque la data aun no se a creado en este punto
    console.log("beforeCreate");
  },

  // nos funciona para hacer peticiones HTTP
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted")
  },
  // renderTriggered, beforeUpdate, update, se activan solo cuando hay un cambio en el DOM. 
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style>
</style>