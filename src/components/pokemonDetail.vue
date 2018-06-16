<template>
    <div class="pokemonDetails" >
        <div v-if="selectedPokemon">
            <h3>{{selectedPokemon.name}}</h3>
            <div class="base sec">
                <div><b>base exprience: </b><span>{{selectedPokemon.base_experience}}</span></div>
                <div><b>height: </b><span>{{selectedPokemon.height}}</span></div>
                <div><b>order: </b><span>{{selectedPokemon.order}}</span></div>
                <div><b>weight: </b><span>{{selectedPokemon.weight}}</span></div>
            </div>
            <div class="moves sec" v-if="selectedPokemon.moves">
                <h4>moves</h4>
                <ul>
                    <li v-for="move in selectedPokemon.moves" :key="move.move.name">
                        <a :href="move.move.url">{{move.move.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="stats sec" v-if="selectedPokemon.stats">
                <h4>stats</h4>
                <ul>
                    <li v-for="stat in selectedPokemon.stats" :key="stat.stat.name">
                        <a :href="stat.stat.url">{{stat.stat.name}}</a>
                        <span>base_stat: {{stat.base_stat}}</span>
                        <span>effort: {{stat.effort}}</span>
                    </li>
                </ul>
            </div>
            <div class="types sec" v-if="selectedPokemon.types">
                <h4>types</h4>
                <ul>
                    <li v-for="type in selectedPokemon.types" :key="type.type.name">
                        <a :href="type.type.url">{{type.type.name}}</a>
                        <span>type: {{type.slot}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else class="loader"></div>
    </div>
</template>

<script>
    export default {
        name: 'pokemonDetails',
        props: {
            selectedPokemon: {
                type: Object,
            }
        },
        computed: {
        },
        created () {
        },
        data () {
            return {}
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sec{
        margin: 6px 0;
        text-align: left;
        h4{
            margin-bottom: 3px;
        }
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 200px;
        overflow: auto;
        li{
            display: inline-block;
            margin: 3px;
            span{
                margin: 10px;
            }
        }
    }
</style>
