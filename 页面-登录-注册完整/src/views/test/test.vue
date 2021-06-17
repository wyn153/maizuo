<template>
  <div class="views__home">
    <div ref="xiaoming">{{ message }}</div>
    <!-- <h1> {{this.$store.state.store1}}</h1> -->
  </div>
</template>

<script>
export default {
  //组件名字
  name: "test",
  // vue数据集中管理
  data() {
    return {
      message: "孙悟空",
    };
  },
  //以下是生命周期
  //页面渲染之后
  mounted() {
    this.message = "菩提老祖";
    // 这一步是异步操作  更改xiaoming的值
    console.log("first", this.$refs.xiaoming.innerHTML);
    // 解决1：常用
    this.$nextTick(() => {
      console.log("second", this.$refs.xiaoming.innerHTML);
    })
  }
}
</script>