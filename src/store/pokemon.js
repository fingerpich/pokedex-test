// import * as pokeapi from 'pokeapi-js-wrapper';
// const pokedexApi = new pokeapi.Pokedex();
import pokedexApi from './pokemonApi.js';

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    pokemons: [],
}

// getters
const getters = {
    pokemons: state => state.pokemons,
}

// actions
const actions = {
    loadPokemons ({commit}, {limit, offset, name}) {
        pokedexApi.getPokemonsList({
            limit: limit || 10,
            offset: offset || 0,
            name: name || ''
    })
            .then(function(response) {
                commit('loadPokemons', response.data);
            })
    }
}
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    loadPokemons (state, items) {
        state.pokemons = items
    },
    removeTest (state, { removedTest }) {
        state.questions.splice(state.questions.indexOf((test) => test.id === removedTest.id), 1)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
