<template>
  <div>
    <li>question id: {{$route.params.id}} title: {{title}}</li>
    <br />
     <button>下一个</button>
   
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    console.log(this.$route.params.id);
    console.log("to:", to, "from:", from);
    next();
  },
  data() {
    return {
      title: "",
      prev: {},
      next: {},
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  },
  mounted() {
    // console.log(this.$route.params.id, this.$route);
    const id = this.$route.params.id;
    const i = this.questionList.findIndex((ele, i) => ele.questionId == id);
    // console.log(i, id);
    this.title = this.questionList[i].title;

   
  }
};
</script>

<style lang='sass' scoped>

</style>