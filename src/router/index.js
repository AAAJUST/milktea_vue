import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
    // 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ("../components/login.vue")
        },
        {
            path:'/index',
            name:'index',
            component: () =>
            import ("../components/index.vue"),
           
        }
    ]
    })