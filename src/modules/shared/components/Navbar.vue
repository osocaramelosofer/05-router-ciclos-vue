<template>
  <div>
<!--    <router-link :to="{ name: 'home' }">Pokemon List</router-link> -->
<!--    <router-link :to="{ name: 'pokemon-id', params: {id: 5}}">Pokemon id</router-link> -->
<!--    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";


export default {
  data(){
    return{
      links:[
        { to:'pokemon-home', name:'home'},
        { to:'pokemon-about', name:'about'},
        { to:'pokemon-id', name:'pokemon-id', id: 150 },
        { to:'https://google.com', name:'google' },
        { to: 'dbz-characters' , name: 'DBZ characters' },
        { to: 'dbz-about' , name: 'DBZ about' },
      ]
    }
  },
  components: {
    CustomLink: defineAsyncComponent( ()=> import('./CustomLink'))
  }
}
</script>

<style scoped>
div{
padding: 0 30px;    
}
div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
div .router-link-exact-active{
    color: #42b983;
}
</style>