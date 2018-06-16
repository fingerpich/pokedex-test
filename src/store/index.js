import Vue from 'vue'
import Vuex from 'vuex'

import pokemon from './remotePokemons'
import myPokemon from './myPokemons'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      pokemon, myPokemon
  }
});

export default store
