import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由守卫使用  ../store/index'里面是vuex
import store from '../store/index'

Vue.use(VueRouter)

// 导入src下的文件夹
import filmRouter from '@/router/routes/film.js'
import centerRouter from '@/router/routes/center.js'
import cinemaRouter from '@/router/routes/cinema.js'
import detailRouter from '@/router/routes/detail.js'
import cityRouter from '@/router/routes/city'
const routes = [
  // 相当于film里的内容在此处
  filmRouter,
  centerRouter,
  cinemaRouter, 
  detailRouter,
  cityRouter,
 {
    path: '/',
    redirect:'/film'
  },
  {
    path:'/test',
    name: "test",
    component:()=> import('@/views/test/test.vue')
  },{
    path:'/vuex',
    component:()=> import('@/views/vuex/vuex')
  },{
    path:'/login',
    name: "login",
    component:()=> import('@/views/login/login.vue')
  },{
    path:'/zhuce',
    name: "zhuce",
    component:()=> import('@/views/login/zhuce.vue')
  },{
    path:'/c',
    name: "c",
    component:()=> import('@/views/login/c.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
// router.beforeEach((to,from,next)=>{
//   // 只有进入center页面时 需要强制登录
//   let arr =['/center']
//   // 即将跳转的下一个页面。arr里面有，
//   if(arr.includes(to.path)){
//     // arr.includes(to.path) 
//     if(store.state.token) {
//       //如果是认证过的用户，所以就直接放行
//       next()
//     } else {
//       // 如果不是我们认证过 直接跳login
//       next({path:'/login'})
//     }
//  }else {
//    //如果是 不需要登录 也能直接让用户看 吸引用户粉丝的页面  不是center页面的则直接让用户放行
//    next()
//   }
// })

export default router
