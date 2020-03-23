<template>
  <div id="app">
    <div class="home" @click="home">首页</div>
    <div id="nav">
      <router-link to="/home" tag="li">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link :to="{path: '/contact'}">Contact</router-link>|
      <router-link :to="{name: 'Service'}">Service</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    home() {
      this.$router.replace('/home')
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: #333;
  text-decoration: none;
}

.active {
  color: #42b983;
}
.exact {
  color: red;
}
</style>
