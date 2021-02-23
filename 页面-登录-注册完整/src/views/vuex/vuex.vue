<template>
  <div>
      <h1>{{this.$store.state.store1}}</h1>
      <h1>{{this.$store.state.city}}</h1>
      <h1>{{this.$store.state.count}}</h1>
      <h1>{{this.$store.state.a.name}}</h1>

      <button @click="add1">mutations测试</button>
      <button @click="add2">actions 测试</button>


      <!-- 第二种方法 -->
      <h1>{{city}}</h1>
  </div>
</template>
<script>
// 第二种方法，
import {mapActions,mapState,mapMutations,mapGetters} from 'vuex'

export default {
    name: 'vuex',
    props:[],
    components:{},
    data() {
      return {

      };
    },
    //方法 函数写这里
    methods: {
        add1(){
            // commit是mutations中的语法
            this.$store.commit('add',1)
        },
        add2(){
          this.$store.dispatch('action1',50)
        },

    },
    //计算属性
    computed: {
      // 第二种方法
      ...mapState(['city'])
    },

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
  
  
  <style  >
  
  </style>