<template>
  <div>
    <van-index-bar :index-list="indexList" highlight-color="red">
      <!-- <template>一个隐形的div -->
      <template v-for="(item, index) in dataList">
        <!-- 标题 -->
        <!--item.index 中的index 是数据中的真实index -->
        <van-index-anchor
          :index="item.index" :key="index" style="background: #eee" />
        <!-- 文本内容 -->
        <!-- data也是数据中的真实数据 -->
        <van-cell
          v-for="(sub, key) in item.data"
          :title="sub.name"
          :key="key"
          @click=changecity(sub)
        />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { cityListData } from "@/api/api";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
import "vant/lib/index.css";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

export default {
  name: "city",
  props: [],
  components: {},
  data() {
    return {
      dataList: [],
      indexList: [],
    };
  },
  //方法 函数写这里
  methods: {
    changecity(sub){
      console.log('sub',sub);
      // 用vuex设置城市列表的城市名
      this.$store.commit('add2',sub.name)
      // 用vuex设置城市列表的城市序号
      this.$store.commit('cinemaidadd',sub.cityId)
      // 设置在城市列表点击进入 进入到首页
      this.$router.push('/film')
    }
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
  created() {
    // 设置底部隐藏
    this.eventBus.$emit("footernav", false)
  },
  //页面渲染之后
  async mounted() {
    // cityListData().then(data =>{
// console.log('data',data)
    // })
    let ret = await cityListData();
    this.dataList = ret[0];
    this.indexList = ret[1];
    // ret 新的数组 索引0表示城市信息 索引1表示字母
    console.log(ret);
    // this.city1 = ret.data.data.films;
    // console.log(this.city1);
  },

  //页面渲染之前
  beforeMount() {},

  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},

  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {
     this.eventBus.$emit("footernav", true);
  },
};
</script>

  <style  >
</style>