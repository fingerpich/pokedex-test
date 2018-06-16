<template>
    <div class="pokemonList">
        <div v-if="tableData">
            <el-input placeholder="name" v-model="filterName"></el-input>
            <div class="table">
                <div class="item" :class="{selected: item===selectedPok}" v-for="item in tableData.results" :key="item.name" v-on:click="handleCurrentPokemonChange(item)">
                    <a :href="item.url">{{item.name}}</a>
                </div>
            </div>
            <div class="paginationBlock">
                <el-pagination
                        :page-size="itemsPerPge"
                        layout="prev, pager, next"
                        @current-change="handleCurrentPageChange"
                        :total="tableData.count">
                </el-pagination>
            </div>
        </div>
        <div v-else class="loader"></div>
    </div>
</template>

<script>
    export default {
        name: 'pokemonList',
        props: {
            list: {}
        },
        computed: {
            tableData: {
                get: function () {
                    if (this.list) {
                        let filteredList = this.list.slice();
                        if (this.filterName) {
                            filteredList = filteredList.filter(p => p.name.indexOf(this.filterName) > -1);
                        }
                        const offset = this.itemsPerPge * (this.currentPage - 1);
                        const limit = this.itemsPerPge;
                        return {
                            count: filteredList.length,
                            results: filteredList.slice(offset, offset + limit)
                        }
                    }
                }
            }
        },
        created () {
        },
        data () {
            return {
                currentPage: 1,
                itemsPerPge: 7,
                filterName: '',
                selectedPok: null
            }
        },
        methods: {
            handleCurrentPokemonChange (selectedPokemon) {
                this.selectedPok = selectedPokemon;
                this.$emit('selectPokemon', selectedPokemon);
            },
            handleCurrentPageChange(page) {
                this.currentPage = page;
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .table {
        .item{
            padding: 1rem;
            border: 1px solid whitesmoke;
            text-align: left;
            color: #777;
            font-size: 0.8rem;
            &.selected{
                background: #eee;
            }
        }
    }
</style>
