
<template>
  <div>
    <calendar />
    <tree :tree="tree" />
  </div>
</template>

<script>
import Calendar from "./Calendar";
import Tree from "./Tree";

export default {
  data() {
    return {
      tree: [
        {
          name: "一级 1",
          children: [
            {
              name: "二级 1-1",
              children: [
                {
                  name: "三级 1-1-1",
                  children: [
                    {
                      name: "四级 1-1-1-1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "一级 2",
          children: [
            {
              name: "二级 2-1",
              children: [
                {
                  name: "三级 2-1-1"
                }
              ]
            },
            {
              name: "二级 2-2",
              children: [
                {
                  name: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          name: "一级 3",
          children: [
            {
              name: "二级 3-1",
              children: [
                {
                  name: "三级 3-1-1"
                }
              ]
            },
            {
              name: "二级 3-2",
              children: [
                {
                  name: "三级 3-1-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    Calendar,
    Tree
  }
};
</script>

<style>
</style>