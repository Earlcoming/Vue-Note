import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 100,
    count: 1,
    studentList: []
  },
  //在介绍state中我们了解到，在Store仓库里，state就是用来存放数据，若是对数据进行处理输出，比如数据要过滤，一般我们可以写到computed中。但是如果很多组件都使用这个过滤后的数据，比如饼状图组件和曲线图组件，我们是否可以把这个数据抽提出来共享？这就是getters存在的意义。我们可以认为，【getters】是store的计算属性
  getters: {
    person(state) {
      // console.log(state);
      return state.studentList.filter(ele => ele.age > 10);
    }
  },
  // 定义方法 mutation同步,因为能改变state的方法是mutations
  // mutations 里面放的是方法，主要用于改变state中的数据源
  mutations: {
    add(state) {
      state.name += 100;
    },
    reduce(state) {
      state.name -= 100;
    },
    addCount(state) {
      state.count++;
    }
  },
  //actions和mutation的区别
  //Action 提交的是 mutation，而不是直接变更状态
  actions: {
    increment(mutation) {
      mutation.commit('addCount')
    }
  },
  modules: {
  }
})
