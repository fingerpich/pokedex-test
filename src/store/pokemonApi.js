import axios from 'axios';
// https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10
class pokemonApi {
    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/'
    }
    getPokemonsList (options) {
        return axios.get(this.baseUrl + 'pokemon/',   {
            params: options,
            headers:  {"Access-Control-Allow-Origin": "*"}
        });
    }
    getPokemonByName (name) {
        return axios.get(this.baseUrl + 'pokemon/'+ name,   {
            headers:  {"Access-Control-Allow-Origin": "*"}
        });
    }
}
export default new pokemonApi();