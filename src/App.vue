<template>
  <div id="app">
    <img src="./assets/logo.png">
    <pokemon-list></pokemon-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PokemonList from "./components/pokemonlist";

export default {
  name: 'app',
  components: {
      PokemonList,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
