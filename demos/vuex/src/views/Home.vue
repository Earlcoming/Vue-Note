<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1><p>red</p></h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    // axios.get('url', {
    //   params: {
    //     key: "fdjaslfas",
    //     msg: "你好"
    //   }
    // });
  }
};
</script>
<style lang="sass" scoped>
p
  color: $color
</style>
