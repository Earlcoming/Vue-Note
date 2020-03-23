<template>
  <div class="pairing">
    <div class="title">
      <h1>生肖配对</h1>
      <h2>十二生肖配对爱情缘分和配对指数，提前知晓！</h2>
    </div>
    <selecter />
  </div>
</template>

<script>
// @ is an alias to /src
import Selecter from "_c/Select.vue";

export default {
  name: "Home",
  components: {
    Selecter
  }
};
</script>
<style lang="sass" scoped>

</style>
