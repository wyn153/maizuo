<template>
  <div>
    <commybutton1 :plain="true"> 我是按钮 </commybutton1>
  </div>
</template>
<script>
import commybutton1 from "@/components/commybutton1.vue";
export default {
  //组件名字
  name: "commybutton",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: { commybutton1 },
  // vue数据集中管理
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : ""
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
