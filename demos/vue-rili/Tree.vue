<template>
  <ul class="tree-li">
    <li
      v-for="(item, index) in tree"
      :key="item.name"
      :class="{scope: item.children, active: showChildren[index]}"
    >
      <span @click="handle(index)">{{item.name}}</span>
      <tree v-show="showChildren[index]" v-if="showed[index]" :tree="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree",
  props: ["tree"],
  data() {
    return {
      showChildren: [],
      showed: []
    };
  },
  methods: {
    handle(index) {
      // 给span绑定到相对应的点击
      this.showChildren.splice(index, 1, !this.showChildren[index]);
      if (!this.showed[index]) {
        // 直接改变数组不能渲染页面
        // this.showed[index] = true;
        this.showed.splice(index, 1, !this.showed[index]);
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@font-face {
  font-family: "iconfont";
  src: url("./static/iconfont.eot");
  src: url("./static/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./static/iconfont.woff2") format("woff2"),
    url("./static/iconfont.woff") format("woff"),
    url("./static/iconfont.ttf") format("truetype"),
    url("./static/iconfont.svg#iconfont") format("svg");
}

.tree-li {
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
}

.scope::before {
  display: inline-block;
  content: "\e65a";
  font-family: "iconfont";
}

.active::before {
  transform: rotateZ(-90deg);
}
</style>