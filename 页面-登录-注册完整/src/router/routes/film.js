export default {
    path:'/film',
    // @代表src文件夹
    component:()=>import('@/views/film/film.vue'),
    children:[
        {
            // 子路由1
            path:'nowplaying',
            component:()=>import('@/views/film/nowplaying.vue'),
        },
        {
            // 子路由2
            path:'comingsoon',
            component:()=>import('@/views/film/comingsoon.vue'),
        },
        {
            // 默认页面
            path:'/film',
            redirect:'nowplaying'
        }
    ]
    
}