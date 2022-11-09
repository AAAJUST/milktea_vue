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

            children: [{
                    path:'/dindan',
                    name:'dindan',
                    component: ()=>
                    import("../basicCompents/dindan.vue")
                },
                {
                path:'AllGoods', //此处一定不要写：/news
                component: () =>
                import ("../components/Goods/AllGoods.vue"),
            },
            {
                path:'Add',//此处一定不要写：/message
                component: () =>
            import ("../components/Goods/add.vue"),
            }
            ]
        }
      ]
    })