<template>
  <div class="pairing-data">
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="man">男生</div>
        </el-col>
        <el-col :span="4">
          <select-se class="mySelect" :name="man" />
        </el-col>
        <el-col :span="3">
          <div class="woman">女生</div>
        </el-col>
        <el-col :span="4">
          <select-se class="mySelect" :name="woman" />
        </el-col>
        <el-col :span="4">
          <el-button type="primary" size="small" @click="defalutClick">生肖配对</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="danger" size="small">精准配对</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import SelectSe from "@/components/Select_se.vue";
import axios from "axios";
export default {
  data() {
    return {
      woman: "woman",
      man: "man",
      content: `生肖配对是依据古籍中的生肖五行理论衍生而来，都是由五行来区分的，十二生肖拥有十二不同的特性，生肖五行之间相生相克是如何分配属相配对的呢。不同的生肖聚在一起，必然会产生不同的化学反应。\<br>
      生肖相生的属相配对自然一路花好月圆，属相相克的配对组合就需要披荆斩棘结伴而行。想知道你和TA的配对会如何？希望了解一下你们的爱情姻缘路？输入你们的生肖属相信息在线速配一下吧。`
    };
  },
  components: {
    SelectSe
  },
  methods: {
    defalutClick() {
      const men = this.$store.state.select[0];
      const women = this.$store.state.select[1];
      axios
        .get("http://apis.juhe.cn/sxpd/query?key=5908c11c95863a04f01c66544b3c1ea7", {
          men,
          women
        })
        .then(data => {
          this.content = data.result.data
          console.log(data);
        });
      console.log(this.$store.state.select);
    }
  }
};
</script>

<style lang='sass' scoped>

</style>