<template>
  <div>
    <h2>contact us</h2>
    <router-link :to="{name: 'A'}">A</router-link>
    <router-link :to="{name: 'B'}">B</router-link>
    <router-link :to="{name: 'C'}">C</router-link>
    <div class="name">
      <input type="text" v-model="name" />
      <span>姓名</span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    // to: 去的页面
    // from：从哪来
    // next() 执行了就跳转
    if (this.name) {
      const flag = window.confirm("你确定要离开吗");
      if (flag) {
        this.name = "";
        next();
      }
    } else {
      next();
    }
  },
  data() {
    return {
      name: ""
    };
  },

  beforeRouteEnter(to, from, next) {
    // 还没进入路由，所以this为undefined
    // console.log(this, )
    next(vm => {
      // 这里的vm就是代表的this
      // console.log(vm)
    })
  }
};
</script>

<style>
</style>