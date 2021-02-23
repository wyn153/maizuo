// 组件 comfooternav 代表着底边栏

<template>
  <div id="app">

   <router-view></router-view>
 <!-- 下面 -->
    <comfooternav v-if="is_show"></comfooternav>
  </div>
</template>
<script>
import axios  from 'axios'
import comfooternav from '@/components/comfooternav.vue'

export default {
    name: 'app',
    props:[],
    components: {
      comfooternav
    },
    data() {
      return {
       is_show:true
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
  
    },

    
    //以下是生命周期
    //组件创建之前
    beforeCreate() {},
    //组件创建之后
    created() {
       this.$nextTick(() => {
      // 接受了detail发送的 footernav 以及参数 false参数  并且赋值给了is_show  ， 此时的is_show  为false，则隐藏
       this.eventBus.$on("footernav", (flag) => {
        this.is_show = flag;
       })
    });

    },

    //页面渲染之前
    beforeMount() {},
    //页面渲染之后
    mounted() {
      // 所有的页面设置_token 则设置在APP页面中，则可以全局去获取数据
      console.log('这是app页面，全局的数据');
    if(this.$store.state.token){
        axios({
          method:'get',
          url:'http://localhost:3009/api/v1/user_info',
           headers:{'Authorization':'Bearer '+ this.$store.state.token} 
        }).then(res=>{
             console.log('进入 App页面里面  的总体请求用户信息数据了')
             console.log(res)
            // 接下来把res返回来的用户信息  利用变异器 存入vuex  让其他  所有的小页面想用 可以持久化用
             console.log('res code')
            console.log(res.data.code) 
            //先根据状态码处理失败情况
            if(res.data.code === '888') {
               console.log('进入失败情况  获取总体数据')
               localStorage.removeItem('_token')
            }
            console.log('全局数据token校验正确情况')
            console.log(res.data.info2.mobile)
            this.$store.commit('usermobile',res.data.info2.mobile)
           })
      }
    },

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
  
<style lang="scss" >
* {
  margin:0;
  padding:0;
}

html,
body {
  // 把他关掉则鼠标滚轮都可以使用
  // touch-action:none;
  height: 100%;
  ul,
  li{
    list-style: none;
  }
}

</style> 