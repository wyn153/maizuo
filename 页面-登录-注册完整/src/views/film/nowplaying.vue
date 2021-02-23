// 这个页面是首页中子路由之一，在films中设置了redirect默认页面
<template>
  <div>
    <!-- 这个数组放数据 -->
    <!-- :list1=list1 父组件给子组件传值 -->

    <comfilmlist :list1="list1" :type="type"></comfilmlist>
    <!-- 可正常显示数据 -->
    <!-- <h1>{{list1}}</h1> -->
  </div>
</template>
<script>
// 直接导入不需要加{} ，
import { nowPlayingListData } from "@/api/api";
import comfilmlist from "@/components/comfilmlist.vue";

export default {
  name: "nowplaying",
  props: {},
  
  // 组件注册
  components: {
    comfilmlist,
  },
  data() {
    return {
      list1: [],
      page: 1,
      type: 1,
    };
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
  mounted() {

  },

  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  // 这一步是为了等异步请求
  async created() {
    // console.log('nowplaying使用');
    //以下两步 一个是表面，一个是内在引入过后的面貌 可以把http 这个方法axios请求揪出来
    let ret = await nowPlayingListData(this.page);
    // api.js 传出等于 = await http.get(nowPlayingListUri +page)
      // console.log(ret);
    this.list1 = ret.data.data.films;
      // console.log(this.list1);
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
  
<style lang="scss" scoped></style>