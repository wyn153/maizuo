// 两个子路由  --- 上边栏
<template>

  <nav>
    <!-- <router-link to="/city" tag="a" class="a"> 城市列表</router-link> -->
      <ul>
        <router-link tag="li" to="/film/nowplaying" active-class="active">
          <span>正在热映</span>
        </router-link>

        <router-link tag="li" to="/film/comingsoon" active-class="active">
           <span>即将上映</span>
        </router-link>
      </ul>
  </nav>
</template>
<script>
export default {
    name: 'comfilmlisttopnav',
    props:[],
    components: {
     
    },
    data() {
      return {
       
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
  }
  </script>
  
<style lang="scss" scoped>
nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  margin-top: 40px;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      display: flex;
       justify-content: center;
    }
    .active {
      span {
        width: 40%;
        border-bottom: 2px solid red;
        display: block;
        color: #fe5100;
      }
    }
  }
}
.a{
  position:absolute
}

</style>
