// import * as pokeapi from 'pokeapi-js-wrapper';
// const pokedexApi = new pokeapi.Pokedex();
import pokedexApi from './pokemonApi.js';

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    apiPokemons: [],
    selectedPokemon: null,
}

// getters
const getters = {
    apiPokemons: state => state.apiPokemons,
    selectedPokemon: state => state.selectedPokemon,
}

// actions
const actions = {
    loadApiPokemons({commit}) {
        pokedexApi.getPokemonsList({
            limit: 10000
        }).then((res) => {
            commit('loadPokemons', res.data);
        })
    },
    loadPokemon ({commit}, pokemon) {
        commit('setSelectedPokemon', null);
        pokedexApi.getPokemonByName(pokemon.name)
            .then(function(response) {
                commit('setSelectedPokemon', response.data);
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
        state.apiPokemons = items
    },
    setSelectedPokemon(state, item) {
        state.selectedPokemon = item
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}
