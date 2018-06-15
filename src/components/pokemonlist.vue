<template>
    <div class="pokemonList">
        <h2>list of pokemons</h2>
        <el-input placeholder="name" v-model="filterName" @change="handleNameFilter"></el-input>
        <el-table :data="tableData.results"  :default-sort = "{prop: 'name', order: 'descending'}"
                  highlight-current-row @current-change="handleCurrentChange"
                  style="width: 100%">
            <el-table-column sortable prop="name" label="name"></el-table-column>
            <el-table-column sortable prop="url" label="url"></el-table-column>
        </el-table>
        <div class="paginationBlock">
            <el-pagination
                    :page-size="itemsPerPge"
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :total="tableData.count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pokemonList',
        props: {
        },
        computed: {
            tableData: {
                get: function () {
                    return this.$store.getters.pokemons
                }
            }
        },
        created () {
            this.loadPokemons()
        },
        data () {
            return {
                itemsPerPge: 10,
                filterName: ''
            }
        },
        methods: {
            loadPokemons(currentPage) {
                this.$store.dispatch('loadPokemons', {
                    offset: this.itemsPerPge * (currentPage - 1),
                    limit: this.itemsPerPge,
                    name: this.filterName
                })
            },
            handleNameFilter () {
                this.loadPokemons(1);
            },
            handleCurrentChange (currentPage) {
                this.loadPokemons(currentPage);
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
