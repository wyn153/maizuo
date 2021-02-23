// 这个页面设置vuex全局

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    store1:'外星人',
    count:0,
    city:'上海',
    // 登录注册中需要使用的数据
    token:'',
    // 影院的数据  默认上海
    cinemaid:'310100',
    a:{
      name:'张三',
      age:18
    },
    usermobile:'点击登录'
  },
  // 不要在mutation中写异步的代码
  mutations: {
    add( state, step){
      console.log('state',state);
      console.log('step',step);
      state.count = state.count+step
    },
    // 设置城市名字
    add2(state, step) {
      console.log("我进入mutations里面了add2 ");
      console.log('step',step)
      state.city = step
    },
     // 设置城市列表的城市序号
    cinemaidadd(state,step) {
      console.log('进入cinemaidadd里面了')
      state.cinemaid = step 
    },
    usermobile(state,step) {
      console.log('进入usermobile里面了')
      state.usermobile = step
    },
    tokenadd(state,step){
      console.log('进入了tokenadd');
      state.token = step 
    }
  
  
  // 触发mutations
  // add1(){
  //  this.$store.commit('add',1)
  // },
  },
  // 可以在 actions 中写异步
  actions: {
    // context 固定参数。可以取其他名
    action1(context,step){
      console.log('context',context);
      console.log('action1-step',step);
      setTimeout(() => {
        context.commit("add", step);
      }, 3000);
    }
  },
  // 触发actions
  // add2(){
  //  this.$store.dispatch('action1',50)
  // },
})
