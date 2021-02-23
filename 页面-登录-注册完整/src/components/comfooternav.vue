// 这个页面是在APP中设置的，底边栏
<template>
  <div class="nav">
    <ul>
      <!-- active-class="active" 点击的时候自动有active -->
      <router-link active-class="active" to="/film" tag="li">
        <!-- <i class="iconfont icondianying"></i> -->
        <svg class="iconfont i" aria-hidden="true">
          <use xlink:href="#icon-dianying"></use>
        </svg>
        <p>电影</p>
      </router-link>

      <router-link active-class="active" to="/cinema" tag="li">
        <svg class="iconfont i" aria-hidden="true">
          <use xlink:href="#icon-yingyuan"></use>
        </svg>
        <p>影院</p>
      </router-link>

      <router-link active-class="active" to="/center" tag="li">
        <svg class="iconfont i" aria-hidden="true">
          <use xlink:href="#icon-profile"></use>
        </svg>
        <p>个人</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "comfooternav",
  props: [],
  components: {},
  data() {
    return {};
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {},

  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},

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
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  height: 50px;
  text-align: center;
  background: #fff;
  color: #7a7e83;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    li {
      margin-top: 5px;
      flex: 1;
      height: 43px;
      // &.active {
      //     color: #fe5100;
      // }
      p {
        margin-top: 2px;
      }
      .i {
        font-size: 20px;
      }
    }
    .active {
      color: #fe5100;
    }
  }
}

.icon-016-dailishang {
  color: red;
}
.iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
