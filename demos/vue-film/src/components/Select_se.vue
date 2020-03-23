<template>
  <el-select v-model="value" placeholder="鼠" size="small" @change="change_par">
    <el-option
      v-for="item in options"
      :key="item.value"
      :value="item.value" 
      >
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props:['name'],
    data() {
      return {
        value: '鼠',
        options: [{
          value: '鼠',
        }, {
          value: '牛',
        }, {
          value: '虎'
        }, {
          value: '兔'
        }, {
          value: '龙'
        }, {
          value: '蛇'
        }, {
          value: '马'
        }, {
          value: '羊'
        }, {
          value: '猴'
        }, {
          value: '鸡'
        }, {
          value: '狗'
        }, {
          value: '猪'
        }],
      }
    },
    methods: {
      change_par(item) {
        console.log()
        if(this.name === 'man'){
          this.$store.state.select[0] = item;
        }else if(this.name === 'woman')
        this.$store.state.select[1] = item;
      },

    }
  }
</script>