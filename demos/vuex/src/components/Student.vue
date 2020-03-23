<template>
<div>
    <p>姓名: <input type="text" v-model="name"></p>
    <p>年龄:  <input type="text" v-model="age"></p>
    <button @click="addData">添加</button>
    <student-show />
</div>


</template>

<script>
import {mapState} from 'vuex';
import StudentShow from '@/components/StudentShow';
export default {
    components: {
        StudentShow
    },
    data() {
        return {
            name: '',
            age: null
        }
    },
    methods: {
        addData() {
            const studentList = {
                name: this.name,
                age: this.age,
                id: +new Date() 
            }
            // this.$store.state.studentList.push(studentList);
            this.$store.commit('changeList');
            console.log(studentList);
        }
    },
    // computed: mapState(['name', 'age'])
    computed: {
        // ...mapState(['name', 'age'])
        // ...mapState({
        //     name: state => state.name,
        //     age: state => state.age
        // })
    }
}
</script>

<style lang='sass' scoped>

</style>