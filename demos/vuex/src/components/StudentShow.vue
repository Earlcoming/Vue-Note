<template>
<ul>
    <li v-for="item in studentList" :key="item.id">{{item.name}}{{item.age}}
        
    </li>
    <li v-for="item in person" :key="item.id + item">person: {{item.name}} </li>
    {{this.$store.state.name}}
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>

    <p>{{this.$store.state.count}}</p>
    <button @click="addCount">+</button>
</ul>

</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['studentList']),
        ...mapGetters(['person'])
    },
    methods: {
        add() {
            this.$store.commit('add');
        },
        reduce() {
            this.$store.commit('reduce')
        },
        addCount(){
            this.$store.dispatch('increment')
        }
    }

}
</script>

<style lang='sass' scoped>

</style>