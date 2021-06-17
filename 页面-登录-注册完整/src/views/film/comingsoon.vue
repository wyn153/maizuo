// 这个页面是首页中子路由之一，在films中设置了redirect默认页面
<template>
  <div>
    <!-- 这个数组放数据 -->
    <!-- :list1=list1 父组件给子组件传值 -->
    <comfilmlist :list1="list1"></comfilmlist>
  </div>
</template>
<script>
import { comingSoonListData } from "@/api/api";
import comfilmlist from "@/components/comfilmlist.vue";
export default {
  name: "comingsoon",
  props: [],
  // 组件注册
  components: {
    comfilmlist,
  },
  data() {
    return {
      list1: [],
      page: 1,
    };
  },
  //组件创建之后
  async created() {
    //以下两步 一个是表面，一个是内在引入过后的面貌 可以把http 这个方法axios请求揪出来
    let ret = await comingSoonListData(this.page);
    // api.js 传出等于 = await http.get(nowPlayingListUri +page)
    this.list1 = ret.data.data.films;
  },
};
</script>