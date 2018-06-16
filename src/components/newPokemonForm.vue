<template>
    <div class="newPokemonForm">
        <el-form ref="newPokemonForm" :model="newPokemon" label-width="120px">
            <el-form-item label="name">
                <el-input v-model="newPokemon.name"></el-input>
            </el-form-item>
            <el-form-item label="base experience">
                <el-input v-model="newPokemon.base_experience"></el-input>
            </el-form-item>
            <el-form-item label="height">
                <el-input v-model="newPokemon.height"></el-input>
            </el-form-item>
            <el-form-item label="weight">
                <el-input v-model="newPokemon.weight"></el-input>
            </el-form-item>
            <el-form-item label="order">
                <el-input v-model="newPokemon.order"></el-input>
            </el-form-item>

            <div>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </div>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: 'newPokemonForm',
        props: {
        },
        computed: {
        },
        created () {
        },
        data () {
            return {
                newPokemon: {}
            }
        },
        methods: {
            onSubmit() {
                this.$emit('newPokemon', this.newPokemon);
                this.newPokemon = {};
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
