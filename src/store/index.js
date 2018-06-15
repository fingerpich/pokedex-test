import Vue from 'vue'
import Vuex from 'vuex'

import pokemon from './pokemon'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
      pokemon,
  }
});

export default store
