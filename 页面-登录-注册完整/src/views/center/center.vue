<template>
    <div class="main">
      <div class="center-view">
        <div class="avatar">
          <img src="https://ftp.bmp.ovh/imgs/2021/02/e607b383a03876a6.jpg" class="avator-icon" />
          <div class="nick-name" @click="login()">{{this.$store.state.usermobile}}</div>
          <!-- 利用总线机制 将登录后的手机号数据传递过来 -->
        </div>
        <ul class="my-order-tab">
          <!-- 电影订单 -->
          <li class="my-order-left">
            <svg class="icon icon-top" aria-hidden="true">
              <use xlink:href="#icon-visualize-color"></use>
            </svg>
            <!-- <span
              class="mint-badge is-primary is-size-small"
              style="display: none"
              >99+</span> -->
            <div class="common-p">电影订单</div>
          </li>
          <!-- 商品订单 -->
          <li class="my-order-right">
            <svg class="icon icon-top" aria-hidden="true">
              <use xlink:href="#icon-order"></use>
            </svg>
            <div class="common-p">商品订单</div>
          </li>
        </ul>
        <!-- 卷 -->
        <div class="margin-set my-card">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-juan-copy"></use>
          </svg>
          <span class="label">卖座券</span>
          <svg class="icon icon-height" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </div>
        <!-- 红包 -->
        <div class="margin-set my-card">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hongbao"></use>
          </svg>
          <span class="label">组合红包</span>
          <svg class="icon icon-height" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </div>
        <!--余额  -->
      <div class="margin-set my-balance">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yue"></use>
          </svg>
          <span class="label">余额</span>
          <span class="value">
            <span class="price-decimal price-fmt"
              ><i>￥</i>
              <span class="interge" style="font-size: 15px">0</span>
              <!-- <span style="display: none">.</span>
              <span class="decimal" style="font-size: 10px"></span>
              <span style="display: none">.</span>
              <span class="decimal" style="font-size: 10px; display: none">00</span> -->
          <svg class="icon icon-height" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg> 
        </span>
        </span>
      </div>
        <!--  设置-->
        <div class="margin-set system-set">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <span class="label">设置</span>
          <svg class="icon icon-height" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  //组件名字
  name: "center",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: {},
  // vue数据集中管理
  data() {
    return {
      value: "1",
    };
  },
  //方法 函数写这里
  methods: {
    login() {
      this.$router.push('/login')
    },
   
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  },
};
</script>

<style lang="css" scoped>
/* body{
  height: 100%;
  background-color:rgba(244, 244, 244 ,0.2);
} */
/* .main-box{
  height: 100%;
  background-color: rosybrown;
} */
.center-view {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  font-size: 15px;
  margin-bottom: 59px;
}
.center-view .avatar {
  text-align: center;
  margin-top: -44px;
  height: 140px;
  padding-left: 22px;
  padding-top: 64px;
  background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
  background-size: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.icon-height{
  font-size: 10px;
  float: right;
  margin-right: 5px;
  line-height: 50px;
  height: 50px;
}
/*  */
.margin-set{
  height: 50px;
  line-height: 50px;
  border: 1px solid wheat ;
}
.my-order-tab{
  height: 100px;
  /* background-color: rosybrown; */
  margin-bottom: 10px;
  display:flex;
  justify-content:space-between;
   /* border: 1px solid black; */
}
.my-order-left,.my-order-right{
  margin:auto; 
}
.icon-top{
  font-size: 25px;
  margin-bottom: 9px;
  margin-left: 14px;
}
.avator-icon{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.price-fmt{
  float: right;
}
</style>
