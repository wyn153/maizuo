// 这个页面是首页中子路由之一，在films中设置了redirect默认页面
<template>
  <div>
    <!-- 这个数组放数据 -->
    <!-- :list1=list1 父组件给子组件传值 -->
    <comfilmlist :list1="list1"></comfilmlist>
  </div>
  
</template>
<script>
import {comingSoonListData } from "@/api/api";
import comfilmlist from '@/components/comfilmlist.vue';
export default {
    name: "comingsoon",
    props:[],
    // 组件注册
    components: {
        comfilmlist
    },
    data() {
      return {
       list1:[],
       page:1,
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
   async created() {
    // console.log('nowplaying使用');
    //以下两步 一个是表面，一个是内在引入过后的面貌 可以把http 这个方法axios请求揪出来
    let ret = await comingSoonListData(this.page);
    // api.js 传出等于 = await http.get(nowPlayingListUri +page)
      // console.log(ret);
    this.list1 = ret.data.data.films;
      console.log(this.list1);
  },

    //页面渲染之前
    beforeMount() {},
    //页面渲染之后

    //页面视图数据更新之前
    beforeUpdate() {},
    //页面视图数据更新之后
    updated() {},
    
     //页面销毁之前
    beforeDestroy() {},
    //页面销毁之后
    destroyed() {},
  }
  </script>
  
<style lang="scss" scoped></style>