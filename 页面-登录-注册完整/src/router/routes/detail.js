export default {
    // 动态路由
    path: '/film/:filmId',
    name: 'detail',
    component: () => import('@/views/detail/detail')
    
    }
    