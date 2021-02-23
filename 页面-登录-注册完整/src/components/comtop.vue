// 这个这个组件只在影院列表设置了，
<template>
  <div class="comtop">
    <div class="city">
      <span @click="aaa"> {{ this.$store.state.city }}</span>
    </div>
    <span class="title">影院</span>
    <!-- <span class="iconfont icon-soushuo"></span> -->
    <svg class="iconfont i" aria-hidden="true">
      <use xlink:href="#icon-xingtaiduICON_sousuo--"></use>
    </svg>
  </div>
</template>
<script>
// import "@/assets/font_2223794_u8ys5fsrcoe/iconfont.css";

export default {
  name: "comtop",
  props: [],
  components: {},
  data() {
    return {};
  },
  //方法 函数写这里
  methods: {
    aaa() {
      // 在影院列表点击进入左上角城市，进入城市列表
      this.$router.push("/city");
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器

  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后

  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {},

  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},

  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
};
</script>
  
<style lang="scss" scoped>
.comtop {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .city {
    margin-left: 10px;
    font-size: 13px;
  }
  .title {
    flex: 1;
    text-align: center;
    margin-right: 30px;
  }

}

.iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 20px;
  font-size: 21px;
}
</style> 