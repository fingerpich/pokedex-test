// root state object.
// each Vuex instance is just a single state tree.
const state = {
    myPokemons: {
        count: 0,
        results: []
    },
    selectInMyPokemon: null,
}

// getters
const getters = {
    myPokemons: state => state.myPokemons,
    selectInMyPokemon: state => state.selectInMyPokemon,
}

// actions
const actions = {
    loadMyPokemons ({commit}) {
        const mp = localStorage.getItem('mypokemons')
        commit('loadMyPokemons', mp && JSON.parse(mp));
    },
    addNewPokemon({commit}, pokemon) {
        // check its name to be uniqe in my pokemons
        if (!state.myPokemons.results.filter(pok => pok.name === pokemon.name).length) {
            commit('add', pokemon);
            localStorage.setItem('mypokemons', JSON.stringify(state.myPokemons));
        }
    },
    removePokemons({commit}, pokemon) {
        commit('remove', pokemon);
    }
}
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    loadMyPokemons (state, items) {
        if (items) {
            state.myPokemons = items;
        }
    },
    selectInMyPokemon(state, item) {
        state.selectInMyPokemon = item
    },
    remove (state, pokemon) {
        state.myPokemons.results = state.myPokemons.results.filter((pok) => pok.name !== pokemon.name)
        state.myPokemons.count--;
    },
    add (state, pokemon) {
        state.myPokemons.results.push({...pokemon});
        state.myPokemons.count++;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
