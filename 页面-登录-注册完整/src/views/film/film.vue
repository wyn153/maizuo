// 这个页面设置了redirect默认页面  并且在film.js中设置了comingsoon和nowplaying两个子路由
// 组件comfilmlisttopnav 便是子路由的页面，以及样式设定
// 底部栏在APP中设置。跳转任何一个页面，底部栏都不会改变
<template>
  <div>
    <div class="comtop" >
    <div class="city">
      <span @click="cityswitch"> {{ this.$store.state.city }}</span>
    </div>
    <span class="title">电影</span>
    <svg class="iconfont i" aria-hidden="true">
          <use xlink:href="#icon-xingtaiduICON_sousuo--"></use>
    </svg>
  </div>
    <comfilmlisttopnav :class="fixed ? 'fixed' : ''"></comfilmlisttopnav>
    <!-- 存放子路由的能力 -->
    <!-- 如果不用子路由的方法引入两个页面，也可以在APP页面中直接设置两个页面，点击一个显示，另一个隐藏 -->

    <router-view></router-view>
    <!-- <button @click="aaa">请求</button> -->
    <!-- <div v-for="(item,index) in films" :key="index">  -->
    <!-- <h1>{{item.films}}</h1> -->
  </div>
</template>
<script>
import axios from "axios";
import comfilmlisttopnav from "@/components/comfilmlisttopnav.vue";
import comloading from "@/components/comloading.vue";

export default {
  name: "film",

  props: [],
  components: {
    comfilmlisttopnav,
    comloading,
  },
  data() {
    return {
      fixed: false,
    };
  },
  //方法 函数写这里
  methods: {
    // 这是简写的axios请求  两种方法
    // aaa() {
    //   console.log("进入了film页面的调试");
    //   axios.interceptors.request.use(
    //     function (config) {
    //       config.headers = {
    //       "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1611759546420507363049473","bc":"310100"}',
    //       "X-Host": "mall.film-ticket.film.list",
    //       }
    //       return config;
    //     },
    //     function (err) {
    //       if (err) {
    //         console.log("err", err);
    //       }
    //     }
    //   );
    //   axios
    //     .get("https://m.maizuo.com/gateway?cityId=310100&pageNum=2&pageSize=10&type=1&k=2591826")
    //     .then((data) => {
    //       console.log(data);
    //       // console.log(data.data);
    //       this.data1 = data.data.data;
    //       console.log(data.data.data);
    //     });
    // },
    cityswitch() {
      console.log("我进来cityswitch了");
      // 在首页点击左上角的城市 选择进入城市列表页面
      this.$router.push("/city");
    },
  },
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
  //页面渲染之后 此时DOM才会产生
  mounted() {
    // 设置吸顶效果
    window.addEventListener(
      "scroll",
      (e) => {
        let top = document.documentElement.scrollTop;

        if (top > 0) {
          this.fixed = true;
        } else {
          this.fixed = false;
        }
      },
      true
    );
  },

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
.fixed {
  position: fixed;
  top: 0;
  background-color: #ffffff;
}
.up {
  height: 50px;
  border-bottom: 1px solid #eee;
  position: relative;

  .up2 {
    text-align: center;
    line-height: 50px;
    .filmtext {
      font-size: 20px;
    }
  }
}
.citytext {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 10px;
}

// 

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
    position: absolute;
  }
  .title {
    flex: 1;
    text-align: center;
    margin-right: 30px;
  }

}


.iconfont {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
        margin-right: 20px;
  font-size: 21px;
    }
</style>
