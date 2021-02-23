<template>
  <div class="detail">
    <div>
      <ul>
        <li @click="$router.go(-1)">回退</li>
      </ul>
    </div>
    <div class="img">
      <img v-lazy="film.poster"/>
    </div>
    <div class="film-detail">
      <div>{{ film.name }}</div>
      <div>{{ film.category }}</div>
      <div>{{ film.premiereAt | timeparser }}上映</div>
      <div>{{ film.nation }} | {{ film.runtime }} 分钟</div>
      <div>
        {{ film.synopsis }}
      </div>
      <!-- 两种方法获取name值，这里的name为双层， -->
      <!-- <div v-if="film.item">
       先给隐藏，数据来了的时候再显示
        电影级别 {{film.item.name}}
      </div> -->
      <div>
        <!-- 第二种直接更改为了单层 -->
        电影级别 {{ d }}
      </div>
<!-- 轮播图 -->
        <!-- 组件进入 comswiper的插槽中， -->
        <!-- :key="film.actors.length" 的作用 ：数据延迟,生命周期重新走一遍  不加，数据在detail页面，comswiper在插槽中,没有携带数据，加了key值后detail重新走生命周期，comswiper中的值则带入到插槽中， -->
   <div class="renyuan">演职人员</div>
      <comswiper :key="film.actors.length" class="actors-item">
        <div v-for="(items,index) in film.actors" :key="index" class="swiper-slide">
          <img v-lazy='items.avatarAddress' alt="">
          <span class="actors-name">{{items.name}}</span>
          <span class="actors-role">{{items.role}}</span>
        </div>
      </comswiper>
    </div>
  </div>


</template>
<script>
// 引入数据
import { moiveDetail } from "@/api/api.js";
// 引入时间的插件
import moment from "moment";
// 引入轮播图的插件
import comswiper from "@/components/comswiper.vue";
export default {
  name: "detail",
  props: [],
  components: {
    comswiper,
  },
  data() {
    return {
      d: "",
      film: { actors: [] },
    };
  },

  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    // 设置时间
    timeparser(value) {
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },

  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  async created() {
    // console.log("我进入detail页面的 mounted里面了");
    // console.log(this.$route.params.filmId);
    let ret = await moiveDetail(this.$route.params.filmId);
    this.$nextTick(() => {
      //http.get(moiveDetailUrl + filmId)
      // console.log(ret);
      this.film = ret.data.data.film;
      console.log(this.film);
      this.d = this.film.item.name;
      // 向外发射数据   发送名 footernav   发送带的东西 false  main.js中添加了propotype、在此处则不需要再次添加，全局感染了，
      // 进入这个页面后，发送了footernav   携带了false参数
      this.eventBus.$emit("footernav", false);
    });
  },

  //页面渲染之前
  beforeMount() {},
  // 页面渲染之后
  mounted() {
  },
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},

  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {
    // 销毁以后再次发送  这里的is_show 为true则显示
    // 如果不设置这一步，APP页面已经设置了隐藏，则一直隐藏。
    this.eventBus.$emit("footernav", true);
  },
};
</script>



<style lang="scss" scoped>
body {
  background-color: #f4f4f4 !important;
}
.kongge {
  height: 20px;
  background-color: #f4f4f4 !important;
}
.detail {
  font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}
.detail {
  .img {
    width: 100%;
    height: 260px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
}
.film-detail div:nth-of-type(1) {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;

  .spanone {
    // color: #ffffff;
    // background-color: #d2d6dc;
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
  }
  .spantwo {
    float: right;
    margin-right: 20px;
    font-style: italic;
    color: #ffb232;
    font-size: 18px;
  }
}
.film-detail div:nth-of-type(2),
div:nth-of-type(3),
div:nth-of-type(4) {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}
.film-detail div:nth-of-type(5) {
  margin-top: 12px;
  font-size: 13px;
  color: #797d82;
}
.toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
}
.hide {
  transition: height 0.5s ease;
  height: 38px !important;
  overflow: hidden;
}
.upper {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.kkk {
  transition: height 0.5s ease;
}
.detail {
  margin-bottom: 10px;
  .swiper-slide {
    img {
      width: 85px;
      height: 85px;
    }
  }
  .img {
    width: 100%;
    height: 270px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.actors-name {
  // padding-top: 10px;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  height: 18px;
  display: block;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.actors-item span {
  display: block;
  text-align: center;
}
.actors-role {
  font-size: 10px;
  color: #797d82;
  width: 85px;
}
.goBack img {
  width: 30px;
}
.film-header {
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100vw;
  height: 44px;
  z-index: 1;
}
.renyuan {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  text-align: left;
  color: #191a1b;
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}
#actors {
  margin-bottom: 20px;
}
.photos-title-bar {
  height: 62px;
  width: 100%;
  padding: 15px;
}
.photos-title-bar span {
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}
.photos-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}
.photos-to-all {
  font-size: 13px;
  color: #797d82;
  float: right;
  margin-right: 30px;
}
// #boximg {
//   width: 150px;
//   height: 100px;
// }
// #imgStyle {
//   width: 150px;
//   height: 100px;
//   background: rgb(249, 249, 249);
//   opacity: 1;
//   display: block;
// }
.Mask {
  // opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  height: 820px;
  background: black;
  z-index: 5;
  // line-height: 820px;
  // text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}
</style>  