<template>
    <div class="container" :class="{hasSelected:apiPokDetailVisiblity}">
        <el-tabs v-model="chosenTab">
            <el-tab-pane label="all pokemons" name="all"  >
                <div class="listdetail" :class="{hasSelected: apiPokDetailVisiblity}">
                    <el-button class="backtoList" v-if="apiPokDetailVisiblity" v-on:click="apiPokDetailVisiblity=false">back to the list</el-button>
                    <pokemon-list :list="apiPokemons.results" v-on:selectPokemon="loadPokemon"></pokemon-list>
                    <pokemon-details v-if="apiPokDetailVisiblity" :selected-pokemon="selectedApiPokemon"></pokemon-details>
                </div>
            </el-tab-pane>
            <el-tab-pane label="my pokemons" name="mine">
                <el-button v-on:click="newPokemonVisibility = true" icon="el-icon-edit">add new</el-button>
                <el-button v-if="selectInMyPokemon" v-on:click="removeSelectedPokemon()" icon="el-icon-delete">remove selected</el-button>
                <el-button class="backtoList" v-if="selectInMyPokemon" v-on:click="selectMinePokemons(null)">back to the list</el-button>
                <el-dialog title="new pokemon" :visible.sync="newPokemonVisibility" center>
                    <new-pokemon-form v-on:newPokemon="addNewPokemon"></new-pokemon-form>
                </el-dialog>
                <div class="listdetail" :class="{hasSelected: selectInMyPokemon}">
                    <pokemon-list v-if="myPokemons" :list="myPokemons.results" v-on:selectPokemon="selectMinePokemons($event)"></pokemon-list>
                    <pokemon-details v-if="selectInMyPokemon" :selected-pokemon="selectInMyPokemon"></pokemon-details>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import PokemonList from "./pokemonlist";
    import PokemonDetails from "./pokemonDetail";
    import NewPokemonForm from "./newPokemonForm";
    export default {
        name: 'container',
        components: {NewPokemonForm, PokemonDetails, PokemonList},
        props: {
        },
        computed: {
            myPokemons: {
                get: function () {
                    return this.$store.getters.myPokemons
                }
            },
            apiPokemons: {
                get: function () {
                    return this.$store.getters.apiPokemons
                }
            },
            selectedApiPokemon: {
                get: function () {
                    return this.$store.getters.selectedPokemon
                }
            },
            selectInMyPokemon: {
                get: function () {
                    return this.$store.getters.selectInMyPokemon
                }
            },
        },
        created () {
            this.$store.dispatch('loadApiPokemons');
            this.$store.dispatch('loadMyPokemons');
        },
        data () {
            return {
                chosenTab: 'all',
                apiPokDetailVisiblity: false,
                newPokemonVisibility: false,
            }
        },
        methods: {
            addNewPokemon (pokemon) {
                this.$store.dispatch('addNewPokemon', pokemon);
                this.newPokemonVisibility = false;
            },
            removeSelectedPokemon () {
                this.$store.dispatch('removePokemons', this.selec);
            },
            selectMinePokemons(selectedInMyPokemons) {
                this.$store.commit('selectInMyPokemon', selectedInMyPokemons);
            },
            loadPokemon (pokemon) {
                this.$store.dispatch('loadPokemon', pokemon);
                this.apiPokDetailVisiblity = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .container{
        max-width: 600px;
        margin: auto;
        transition: all 0.3s ease;
        &.hasSelected {
            max-width: 900px;
        }
        @media screen and (min-width: 600px) {
            .backtoList {
                display: none;
            }
        }
    }
    .listdetail {
        .pokemonList{
            margin: 30px 0 0;
        }
        &.hasSelected .pokemonList{
            display: none;
        }
        @media screen and (min-width: 600px) {
            &.hasSelected{
                display: flex;
                &>div{
                    width: 50%;
                    padding: 0 10px;
                    display: block!important;
                }
            }
        }
    }
    .el-dialog{
        width: 100%!important;
        max-width: 500px;
    }
    .loader {
        border: 7px solid #f3f3f3;
        border-top: 7px solid #4ab2fe;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
        margin: 100px auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

</style>
