import * as pokeapi from 'pokeapi-js-wrapper';
const pokedexApi = new pokeapi.Pokedex();

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
    loadPokemons ({ commit }, {limit, offset}) {
        pokedexApi.getPokemonsList({
            limit: limit || 0,
            offset: offset || 10
        })
            .then(function(response) {

            })
    }
}
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    receiveTests (state, {items, count}) {
        state.questions = items
        state.questionCount = count
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
